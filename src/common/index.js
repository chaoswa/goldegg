import { myGet, myPost,URL} from './api'
import { gameList, TYPE_TWO, TYPE_ONE} from './config'

//请求user/login接口，获取uid
export async function getLoginData(loginData,userInfo) {
    let url = `${URL}user/login`;
    let data = {
      wx_code: loginData.code,
      nickname: userInfo.nickName,
      avatarurl: userInfo.avatarUrl,
      symbol: whhm
    }
    let userData= await myPost(url, data)
    return userData
};

//请求user/userInfo接口，获取用户信息
export async function getInfoData(uid) {
    let url = `${URL}user/userInfo`;
    let data = {
        uid: uid,
    }
    let userInfoData= await myPost(url, data)
    return userInfoData
};

//加载获取首页广告
export function getIndexAd(){
    let url = `${URL}user/adShow`;
    let adData = {
        show_type: TYPE_TWO
    }
    let indexAdData = {
        show_type: TYPE_ONE
    }
    myPost(url, adData).then((res) => {
        console.log('悬浮广告',res)
        if (res.data.status == 200) {
            if (res.data.data.length > 0) {
                that.float_ad= res.data.data[0]
            }
        }
    })
    myPost(url, indexAdData).then((res) => {
        console.log('首页广告',res)
        if (res.data.status == 200) {
            if (res.data.data.length > 0){
                that.index_ad= res.data.data[0]
            }
        }
    })
}