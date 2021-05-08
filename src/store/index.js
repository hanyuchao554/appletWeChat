import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
    detailApplyDo: {
      memo: ''
    },
    detailApplyDoStr: {},
    currOrganizationData: {
      currTag: {}
    },
    // 当前编制对象
    currEditData: {},
    forkerLeftData: {},
    // 对象查询
    platformGoodsQueryData: {}
  },
  mutations: {
    setForkerLeftData(state, data) {
      state.forkerLeftData = data
    },
    setCurrEditData(state, data) {
      state.currEditData = data
    },
    setDetailApplyDoInit(state) {
      state.detailApplyDo = {
        memo: ''
      }
    },
    setDetailApplyDo(state, detailApplyDo) {
      if (detailApplyDo) {
        let _d = JSON.parse(JSON.stringify(detailApplyDo));
        state.detailApplyDo = _d;
      } else {
        state.detailApplyDo = { memo: '' }
      }
    },
    setDetailApplyDoStr(state, detailApplyDoStr) {
      state.detailApplyDoStr = detailApplyDoStr
    },
    setCurrOrganizationData(state, currOrganizationData) {
      state.currOrganizationData = currOrganizationData
    },
    setDetailApplyDoParams(state, { key, value }) {
      state.detailApplyDo[key] = value
    },
    setPlatformGoodsQueryData(state, data) {
      state.platformGoodsQueryData = data
    }

  },
  actions: {

  }
});


// "data": {
//   "applyDeptId": "20",
//   "applyId": "174",
//   "contactsId": "8",
//   "endPositionGps": "121.74591411564634,31.35348762102071",
//   "endPositionId": "176",
//   "endTime": "1604235357",
//   "goodsCode": "额",
//   "goodsId": "5696",
//   "importance": "一般",
//   "jobContent": "总组",
//   "lighteningDepartmentName": "工务保障部",
//   "memo": "",
//   "operateState": "submit",
//   "proCode": "H0000",
//   "requestDepartmentName": "制造二部",
//   "requestType": "计划任务",
//   "startPositionGps": "121.7442672393112,31.35579874276787",
//   "startPositionId": "128",
//   "startTime": "1604235355",
//   "tranDeptId": "21"
// },

// "data": {
//   "applyDeptId": "20",
//   "contactsId": "8",
//   "endPositionGps": "121.74407412026213,31.35562008523303",
//   "endPositionId": "129",
//   "endTime": "1604235649",
//   "goodsCode": "看看",
//   "goodsId": "5697",
//   "importance": "一般",
//   "jobContent": "移位",
//   "lighteningDepartmentName": "工务保障部",
//   "memo": "",
//   "operateState": "submit",
//   "proCode": "H0000",
//   "requestDepartmentName": "制造二部",
//   "requestType": "计划任务",
//   "startPositionGps": "121.761217,31.333478",
//   "startPositionId": "189",
//   "startTime": "1604235647",
//   "tranDeptId": "21"
// },