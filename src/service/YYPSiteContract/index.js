import app from "@/common/request/index";

// 提交企业信息
const CreateByDto = async (data) => {
	let result = await app.Request({
		url: "/api/services/app/YYPSiteContract/CreateByDto",
		data: data,
		isObj: true,
		isNotNeedToken: true,
	});
	return result;
};

export default {
	CreateByDto,
};
