import { request } from "./_service";

/**
 *  发送post-json请求
 * @param {object} {url,data={}} 
 */
export function httpPost({url,data={}}){
    return request({
        url:url,
        method: 'post',
        data
    })
}

/**
 *  发送get-json请求
 * @param {object} {url,data={}} 
 */
export function httpGet({url,data={}}){
    return request({
        url:url,
        method:'get',
        data
    })
}