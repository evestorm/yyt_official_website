import app from "@/common/request/index";

// 获取班级数据
const GetGridDto = async (data) => {
	let result = await app.Request({
		url: "/api/services/app/democlass/GetGridDto",
		data: data,
		isObj: true,
		isNotNeedToken: true,
	});
	return result;
};

export default {
	GetGridDto,
};
