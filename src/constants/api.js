// 接口基础配置
const isDev = process.env.NODE_ENV === 'development'
export const DEV_HOST = "https://www.iwchuang.cn/ichuang"//添加接口
export const PROD_HOST = "https://www.iwchuang.cn/ichuang"
export const HOST = isDev ? DEV_HOST : PROD_HOST
export const PAGE_SIZE = 6
export const ROOM_PAGE_SIZE = 20

//获取用户信息
export const API_GETINFORMATION_DETAIL = `${HOST}/getMember.action`

// 首页获取信息
export const API_PROJECT_LIST = `${HOST}/listProjectApply.action`
export const PAYLOAD_PROJECT_LIST = {page:1,row:6}
//获取社员列表
export const API_MEMBER_LIST = `${HOST}/listMember.action`
export const PAYLOAD_MEMBER_LIST = {school_name: '',club_name: '',page:1,row:6}

//获取单个社员的详细信息
export const API_MEMBER_INFORMATION = `${HOST}/getMember.action`

//获得活动列表
export const API_ACTIVITY_LIST = `${HOST}/listActivity.action`
export const PAYLOAD_ACTIVITY_LIST = {page:1,row:6}

//活动报名
export const API_ACTIVITY_CREATE = `${HOST}/addActivityApply.action`
export const PAYLOAD_ACTIVITY_CREATE = { activity_id: 0, apply_name: ''}

//获取大赛列表
export const API_MATCH_LIST = `${HOST}/listCompetition.action`
export const PAYLOAD_MATCH_LIST = {page:1,row:6}

//活动报名
export const API_MATCH_CREATE = `${HOST}/listCompetitionApply.action`
export const PAYLOAD_MATCH_CREATE = { competition_id: 0, apply_name: ''}

//获取课程列表
export const API_COURSE_LIST = `${HOST}/listCourse.action`
export const PAYLOAD_COURSE_LIST = {page:1,row:6}

//获取课程老师的信息
export const API_COURSE_TEACHER = `${HOST}/getTeacher.action`
//获取课程章节信息
export const API_COURSE_CHAPTER = `${HOST}/listCourseChapter.action`
//获取课程练习信息
export const API_COURSE_EXERCISE = `${HOST}/listCourseExercise.action`
//获得课程练习题
export const API_COURSE_EXERCISEQUSSTION = `${HOST}/listCourseExerciseQuestion.action`
//提交积分
export const API_COURSE_EXERCISEPOINT= `${HOST}/addPointDetail.action`
export const PAYLOAD_COURSE_EXERCISEPOINT = {exercise_name:'',exercise_id:0,member_name:'', member_id:'',score:'',point:'' }
//提交课程考核结果
export const API_COURSE_EXERCISERESULT= `${HOST}/addCourseExerciseResult.action`
export const PAYLOAD_COURSE_EXERCISERESULT = {count:'',point_id:0,point_name:'', time:''}

//获得项目列表
export const API_PROJECT_LISTS = `${HOST}/listProject.action`
//获取项目详情
export const API_PROJECT_DETAIL = `${HOST}/listProject.action`
//项目申请
export const API_PROJECT_APPLYCATION = `${HOST}/listProjectApply.action`
export const  PAYLOAD_PROJECT_CREATE = { apply_name:'',project_name:'' }
//获得积分详情
export const API_POINT_DETAIL = `${HOST}/listPointDetail.action`
//获得总积分
export const API_POINT_COUNT = `${HOST}/updatePoint.action`







