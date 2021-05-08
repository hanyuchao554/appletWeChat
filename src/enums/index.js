export const applyStateEnum = (applyState) => {
    let text = ''
    switch (applyState) {
        case 2:
            text = '编制中'
            break;
        case 11:
            text = '计划任务'
            break;
        case 12:
            text = '自由任务'
            break;
        case 13:
            text = '混合任务'
            break;
        case 50:
            text = '任务完成'
            break;

        default:
            break;
    }
    return text
}
export const taskPlanStateEnum = (taskPlanState) => {
    let text = ''
    switch (taskPlanState) {
        case 21:
            text = '未接单'
            break;
        case 22:
            text = '已接单'
            break;
        case 23:
            text = '开始执行'
            break;
        case 24:
            text = '到达起始地'
            break;
        case 25:
            text = '作业开始'
            break;
        case 26:
            text = '作业结束'
            break;
        case 27:
            text = '任务完成'
            break;

        default:
            break;
    }
    return text
}
export const tranStateEnum = (tranState) => {
    let text = ''
    switch (tranState) {
        case 0:
            text = '未指派车辆'
            break;
        case 1:
            text = '任务已分配'
            break;
        case 2:
            text = '自由任务'
            break;
        case 3:
            text = '任务已接单'
            break;
        case 4:
            text = '任务执行中'
            break;
        case 5: // 自由任务
            text = '任务执行中'
            break;
        case 50:
            text = '任务完成'
            break;
        case 99:
            text = '任务取消'
            break;

        default:
            break;
    }
    return text
}