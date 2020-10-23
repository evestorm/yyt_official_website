import axios from "axios";
import appConfig from "@/common/config/config";
import qs from "qs";
import storage from "@/common/storage";
import context from "@/main.js";
import util from "@/utils";

// 网络请求url
let api = {
   domain: appConfig.domain,
   addomain: appConfig.addomain,
   outUrl: appConfig.outUrl,
   Authorization: "",
};

// axios配置项
let config = {
   // url前缀
   baseURL: appConfig.domain,
   method: "GET", // 默认GET请求
   headers: {
      "Content-Type": "application/json;charset=UTF-8",
   }, // 请求头信息
   // 参数
   data: {},
   // 设置超时时间
   timeout: 100000,
   // 携带凭证
   withCredentials: true,
   // 返回数据类型
   responseType: "json",
};

// token获取
const getToken = async () => {
   // const token = storage.getAppUserInfo();
   let userNameOrEmailAddress = "Test";
   let password = "Test!123";
   // if (userInfo) {
   //    userNameOrEmailAddress = userInfo.loginName;
   //    password = userInfo.pwd;
   // }
   let [error, res] = await swRequest({
		url: api.domain + "/api/services/app/TokenAuthService/Authenticate",
		method: "POST",
		data: {
			userNameOrEmailAddress: userNameOrEmailAddress,
			password: password,
		},
	});
   // 登陆不成功跳转登陆页
   if (res.data.success) {
      let obj = {};
      api.Authorization = `Bearer ${res.data.result.accessToken}`;
      obj.Bearer = api.Authorization;
      obj.overTime =
         new Date().getTime() +
         res.data.result.expireInSeconds * 1000;
      storage.setToken(obj);
   } else {
      // uni.navigateTo({
      //    url: "/pages/homePage/login/login",
      // });
   }
};

// 验证token
const verifyToken = async () => {
   let res = storage.getToken();
   if (res) {
      let nowTime = new Date().getTime();
      if (res && res.Bearer && nowTime < res.overTime) {
         api.Authorization = res.Bearer;
      } else {
         await getToken();
      }
   } else {
      await getToken();
   }
};

// 网络请求封装
const Request = async (option) => {
   let requestApi = async () => {
      if (!option.isObj) {
         //假如只有一个参数就拼接到url上（EFcore单个参数只能这么传递）
         let paramData = util.urlEncode(option.data);
         // isObj参数为假，则把option.data参数写入url
         option.url = api.domain + option.url + "?" + paramData;
         option.data = "";
      } else {
         // isObj参数为真，data 放到post里面去传递
         option.url = api.domain + option.url;
      }
      option.header = {
         // Authorization: api.Authorization,
         "X-Requested-With": "XMLHttpRequest",
      };
      // const userInfo = getApp().globalData.userInfo;
      // if (userInfo) {
      //    option.header.StoreInfo = `{storeId:'${userInfo.buUnitGUID}',cWCompanyID:'${userInfo.tenantId}'}`; // 当前门店的信息用于全局过滤
      // }

      // 需要传入wx.request()的method属性，默认设置为'post'
      if (option.method != "GET") {
         option.method = "POST";
      }

      let errorMsg = "";
      let [error, rdata] = await swRequest(option);
      if (error) {
         errorMsg = "系统繁忙,请稍后再试";
      } else {
         if (
            rdata &&
            (rdata.data.success === true || rdata.data.success === undefined)
         ) {
            option.abpSuccess && option.abpSuccess(rdata.data.result);
         } else if (rdata && !rdata.data.success) {
            if (rdata.data.error.message) {
               errorMsg = rdata.data.error.message;
            }
            if (rdata.data.error.validationErrors) {
               rdata.data.error.validationErrors.forEach((item) => {
                  errorMsg += item.message + ",";
               });
               errorMsg = errorMsg.substring(0, errorMsg.length - 1);
            }

            option.abpFail && option.abpFail();
         }
      }

      // 防止hideLoading 把showToast 展示出来隐藏掉
      if (errorMsg) {
         errorMsg =
            errorMsg.indexOf("服务器内部") != -1 ?
            "系统繁忙,请稍后再试" :
            errorMsg;

         context.$toasted.show("提示信息: " + errorMsg, {
            icon: {
               name: "fa fa-exclamation", // icon见main.js
            },
            type: "error",
         });

         // 有错误信息就返回空
         return null;
      } else {
         // context.$toasted.show("提示信息: " + errorMsg, {
         // 	icon: {
         // 		name: "fa fa-exclamation",
         // 	},
         // 	type: "error",
         // });
      }

      let result = rdata.data;
      if (rdata.data.result) {
         result = rdata.data.result;
      }
      if (result) {
         result = util.null2str(result);
      }

      return result;
   };
   if (!option.isNotNeedToken) {
      await verifyToken();
      let result = await requestApi();
      return result;
   } else {
      return await requestApi();
   }
};

function swRequest(options) {
   return new Promise((resolve, reject) => {
      const instance = axios.create({
         ...config,
         ...options,
      });

      // request 拦截器
      instance.interceptors.request.use(
         (config) => {
            // 进度条开始
            context.$Progress.start();
            // 2. 带上token
            // const token = storage.getToken();
            // if (token.length > 0) {
            // 	config.headers.Authorization = token;
            // }
            // 3. 根据请求方法，序列化传来的参数，根据后端需求是否序列化
            if (config.method === "POST") {
               if (
                  config.data.__proto__ === FormData.prototype ||
                  config.url.endsWith("path") ||
                  config.url.endsWith("mark") ||
                  config.url.endsWith("patchs")
               ) {
                  // TODO: 处理FormData
               } else {
                  config.data = qs.stringify(config.data);
               }
            }
            return config;
         },
         (error) => {
            return Promise.reject(error);
         }
      );

      // response 拦截器
      instance.interceptors.response.use(
         (response) => {
            // 进度条结束
            context.$Progress.finish();
            // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
            if (response.data === undefined) {
               response.data = JSON.parse(response.request.responseText);
            }
            return response;
         },
         (error) => {
            // 进度条结束
            context.$Progress.finish();
            // const { status } = error.response;
            // if (status === 401) {
            // 	Toast.fail("token值无效，请重新登录");
            // 	// // 清除token
            // 	// storage.removeToken();
            // 	// // 页面跳转
            // 	// router.push("/login");
            // } else {
            // 	if (error.response.data === undefined) {
            // 		error.response.data = JSON.parse(
            // 			error.response.request.responseText
            // 		);
            // 	}
            // 	Toast.fail(error.response.data.message);
            // }
            return Promise.reject(error);
         }
      );

      // 请求处理
      instance(options)
         .then((res) => {
            // const { code, data } = res.data;
            // if (code === ERR_OK) resolve(data);
            resolve([null, res]);
         })
         .catch((error) => reject([error, null]));
   });
}

export default {
   Request,
   swRequest,
   api,
};