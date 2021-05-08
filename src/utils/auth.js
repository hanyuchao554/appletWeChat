import {
  BaseDataKey
} from '@/constant'

class Auth {
  getBaseUser() {
    let baseData = wx.getStorageSync(BaseDataKey)
    return baseData.user
  }
  getUserId() {
    let baseData = wx.getStorageSync(BaseDataKey)
    // console.log(baseData)
    return baseData.user ? baseData.user.userId : 0
  }
}

export default new Auth()
