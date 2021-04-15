function accDiv(arg1, arg2) {
  var t1 = deal(arg1);
  var t2 = deal(arg2);
  var r1 = Number(arg1.toString().replace(".", ""))
  var r2 = Number(arg2.toString().replace(".", ""))
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

function deal(arg) {
  var t = 0;
  try {
    t = arg.toString().split(".")[1].length
  } catch (e) { }
  return t;
}

export default {
  data: {
    requestTypeBg: '',
    requestTypeStr: ''
  },
  methods: {
    accDiv(arg1, arg2) {
      var t1 = deal(arg1);
      var t2 = deal(arg2);
      var r1 = Number(arg1.toString().replace(".", ""))
      var r2 = Number(arg2.toString().replace(".", ""))
      var data = (r1 / r2) * Math.pow(10, t2 - t1);
      return Math.floor(data)
    },

    deal(arg) {
      var t = 0;
      try {
        t = arg.toString().split(".")[1].length
      } catch (e) { }
      return t;
    },
    getWeight(data) {
      return data ? accDiv(data, 1000) : 0
    },
    getTagBgColor(requestType) {
      switch (requestType) {
        case '计划任务':
          this.requestTypeBg = '#005BAC';
          this.requestTypeStr = '计';
          break;
        case '临时任务':
          this.requestTypeBg = '#EFA600';
          this.requestTypeStr = '临';
          break;
        case '快速任务':
          this.requestTypeBg = '#E0291E';
          this.requestTypeStr = '快';
          break;
        case '衍生任务':
          this.requestTypeBg = '#037D3D';
          this.requestTypeStr = '衍';
          break;

        default:
          this.requestTypeBg = '#005BAC';
          break;
      }
    },
    setRequestType(item) {
      let type = item.requestType;
      switch (type) {
        case '计划任务':
          item.requestTypeBg = '#005BAC';
          item.requestTypeStr = '计';
          item.reqStr = '计'
          break;
        case '临时任务':
          item.requestTypeBg = '#EFA600';
          item.requestTypeStr = '临';
          item.reqStr = '临'
          break;
        case '快速任务':
          item.requestTypeBg = '#E0291E';
          item.requestTypeStr = '快';
          item.reqStr = '快'
          break;
        case '衍生任务':
          item.requestTypeBg = '#037D3D';
          item.requestTypeStr = '衍';
          item.reqStr = '衍'
          break;
        default:
          break;
      }
    },
    setPlatFormTaskList(list,addChecked) {
      if (!list || !list.length) return []
      let _list = JSON.parse(JSON.stringify(list))
      return _list.map((item) => {
        this.setRequestType(item);
        item.goodsWeight = this.getWeight(item.goodsWeight)
        item.startTimeStamp = this.getTime(item.startTimeStamp);
        item.endTimeStamp = this.getTime(item.endTimeStamp);
        if(addChecked) item.checked = false;
        return item;
      });
    }
  },

}
