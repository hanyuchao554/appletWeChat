import md5 from 'js-md5';
import {
  BaseDataKey
} from '@/constant'
  const Host = 'http://39.100.7.84:8090/'

  // const Host = 'https://cssc.100mhb.com/'

function getBaeData() {
  let baseData = wx.getStorageSync(BaseDataKey) || {}
  return {
    baseUpData: {
      timestamp: new Date().getTime(),
      userId: baseData.user ? baseData.user.userId : 0,
      interfaceVersion: "1.0",
      encryption: "",
    },
    token: baseData.token || undefined,
    salt: baseData.salt || ''
  }
}

function setEncryption(data, salt) {
  let encryption = ''
  if (salt) {
    let _data = JSON.stringify(data) + salt
    encryption = md5(_data)
  }
  return encryption
}

const request = (src, data) => {
  return new Promise((resolve, reject) => {
    let {
      baseUpData,
      token,
      salt
    } = getBaeData()
    let encryption = setEncryption(data, salt)
    baseUpData.encryption = encryption
    let _data = JSON.stringify({
      data,
      ...baseUpData
    })
    wx.request({
      timeout: 9000,
      header: {
        token
      },
      url: `${Host}${src}`,
      method: 'POST',
      data: _data,
      success: function (res) {
        if (res.statusCode === 200) {
          resolve(res.data.data)
        } else {
          if (res.data.errorCode === '0102') {
            wx.removeStorageSync(BaseDataKey);
            wx.reLaunch({
              url: '/pages/login/login',
              success: () => {
                wx.showToast({
                  title: res.data.errorMessage,
                  icon: 'none'
                })
              }
            });
          } else {
            wx.showToast({
              title: res.data.errorMessage,
              icon: 'none'
            })
          }
          reject(res.data.errorMessage)
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '网络超时,请重新尝试',
          icon: 'none'
        })
        reject(res.data)
      }
    })
  })
}
export default request
