import appConfigDev from "@/common/config/config.dev.js";
import appConfigProd from "@/common/config/config.prod.js";

let appConfig = {
	picdomain: "https://pic.cwyyt.cn", // 图片上传地址
};
if (process.env.NODE_ENV === "production") {
	appConfig = Object.assign(appConfig, appConfigProd);
} else {
	appConfig = Object.assign(appConfig, appConfigDev);
}

export default appConfig;