class Valid {

  isValid = true
  emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  tip(message) {
    wx.showToast({
      title: message,
      icon: 'none'
    })
  }

  handleValid(rules, data) {
    this.isValid = true
    for (let key of Object.keys(rules)) {
      let {
        type = 'string', message, validator
      } = rules[key]
      if (validator) {
        let callBack = this.customValid()
        validator(data[key], callBack)
      } else {
        switch (type) {
          case 'array':
            if (!data[key].length) {
              this.tip(message)
              this.isValid = false
            }
            break;
          case 'number':
            if (!data[key] || isNaN(data[key])) {
              this.tip(message)
              this.isValid = false
            }
            break;
          case 'string':
            if (!data[key]) {
              this.tip(message)
              this.isValid = false
            }
            break;
          case 'phone':
            let reg = /^[1][0-9]{10}$/
            if (!data[key]) {
              this.tip(message)
              this.isValid = false
            } else if (!reg.test(data[key])) {
              this.tip('请输入有效手机号码')
              this.isValid = false
            }
            break;
          case 'price':
            if (data[key] === 0) {
              this.tip(message)
              this.isValid = false
            }
            if (typeof data[key] == 'string' && (data[key] == '0' || data[key] == '0.00')) {
              this.tip(message)
              this.isValid = false
            } else
              if (!data[key]) {
                this.tip(message)
                this.isValid = false
              }
            break;
          case 'email':
            if (!data[key]) {
              this.tip(message)
              this.isValid = false
            } else if (!this.emailReg.test(data[key])) {
              this.tip('无效邮箱')
              this.isValid = false
            }
            break;

          default:
            break;
        }
      }
      if (!this.isValid) break
    }
    return this.isValid
  }

  customValid() {
    return (message) => {
      if (message) {
        showToast.error(message)
        this.isValid = false
      }
    }
  }
}

export default new Valid()
