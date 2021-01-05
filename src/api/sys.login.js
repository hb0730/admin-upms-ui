import cookies from "@/libs/util.cookies"
import { removeToken, getToken } from "./constant"
/**
 * login 登录
 * @param {url} url 登录地址
 */
export function login(url){
 var baseurl= process.env.VUE_APP_API+url
 window.location.replace(baseurl)
}

/**
 * 登出
 * @param {string} url 
 */
export function SYS_LOGOUT(){
    var token=getToken()
    if(token&&token!="undefined"){
        var url = process.env.VUE_APP_API+"/oauth/logout?access_token="+token
        removeToken();
        window.location.replace(url)
    }
}