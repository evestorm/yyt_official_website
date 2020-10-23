import app from "@/common/request/index";

// 获取文章信息
const GetSiteArticleInformation = async (data) => {
   let result = await app.Request({
      url: "/api/services/app/YYPSiteArticle/GetSiteArticleInformation",
      data: data,
      isObj: true,
      isNotNeedToken: true,
   });
   return result;
};

// 获取文章详情
const GetViewDto = async (data) => {
   let result = await app.Request({
      url: "/api/services/app/YYPSiteArticle/GetViewDto",
      data: data,
      isObj: false,
      isNotNeedToken: true,
   });
   return result;
};

export default {
   GetSiteArticleInformation,
   GetViewDto,
};