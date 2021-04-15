export default {
  data: {
    // 驳运部门驳运部门
    popUpTypes: {
      isDepartment: false,
      isStartTime: false,
      isEndTime: false,
      isJobContent: false,
      isContacts: false,
      isImportance: false,
      isCarTypeCount: false,
      isCraneApplyCar: false,
      isCraneApplyAddress: false,
      isAreaPullDownList: false,
      isDepartmentOrArea: false,
      isProdDept: false
    }
  },
  methods: {
    hasPopUp(popUpKey) {
      this.hasInput = true
      this.popUpTypes[popUpKey] = true
    },
    colsePopUp(popUpKey) {
      this.hasInput = false
      this.popUpTypes[popUpKey] = false
    }
  }
}
