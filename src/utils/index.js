// 对象转url参数
/**
 * @param {Object} obj数据
 * @param {Object} 第一个字符
 * @param {Object} key
 * @param {Object} encode
 */
function urlEncode(param, firstSymbol, key, encode) {
   if (param == null || Object.keys(param).length === 0) return "";
   let paramStr = "";
   let t = typeof param;
   if (t == "string" || t == "number" || t == "boolean") {
      paramStr +=
         "&" +
         key +
         "=" +
         (encode == null || encode ? encodeURIComponent(param) : param);
   } else {
      for (let i in param) {
         let k =
            key == null ?
            i :
            key + (param instanceof Array ? "[" + i + "]" : "." + i);
         paramStr += urlEncode(param[i], "&", k, encode);
      }
   }

   firstSymbol = firstSymbol || "&";

   paramStr = firstSymbol + paramStr.substring(1, paramStr.length);
   return paramStr;
}

/**
 * null => ''
 * @param {*} data 要处理的数据
 */
function null2str(data) {
   for (let x in data) {
      if (data[x] === null) { // 如果是null 把直接内容转为 ''
         data[x] = '';
      } else {
         if (Array.isArray(data[x])) { // 是数组遍历数组 递归继续处理
            data[x] = data[x].map(z => {
               return null2str(z);
            });
         }
         if (typeof (data[x]) === 'object') { // 是json 递归继续处理
            data[x] = null2str(data[x])
         }
      }
   }
   return data;
}

/**
 * @description: 用于发送某个指定URL的PV统计请求  https://tongji.baidu.com/web/help/article?id=235&type=0
 * @param {pageUrl} 页面的URl
 * @example this.$util.baiduPageView();
 */
function baiduPageView(pageUrl) {
		// 加上storeId
   pageUrl = `${pageUrl}`
   _hmt.push(['_setAutoPageview', false]);
   _hmt.push(['_trackPageview', pageUrl]);
}

export default {
	urlEncode,
	null2str,
	baiduPageView,
};