import util from "@/libs/util";

export const authorization="authorization";

export const bearer="bearer ";

/**
 * 获取access_token
 */
export  function getToken(){
  return  util.cookies.defaultGet(authorization)
}

/**
 * 删除token
 */
export function removeToken(){
    return util.cookies.defaultRemove(authorization);
}