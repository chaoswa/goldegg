export const myPost=function(url,data) {
  return new Promise(
    (resolve,reject)=>{
      wx.request({
        method: 'POST',
        url: url,
        data: data,
        
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res);
        }
      })
    }
  )
  
};

export const myGet= function(url) {
  return new Promise(
    (resolve, reject) => {
      wx.request({
        method: 'GET',
        url: url,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res);
        },
        complete: function () {
          console.log('complete');
        }
      })
    }
  )

};

export const useLogin= function() {
  return new Promise(
    (resolve, reject) => {
      wx.login({
          success: function (res) {
            resolve(res)
          },
          fail: function (res) {
            reject(res);
          }
      })
    }
  )

};

export const URL='https://ttfl.chaosuduokai.com/api/'