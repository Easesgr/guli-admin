import request from '@/utils/request'
export default{
    addCourseInfo(courseInfo){
        return request({
            url: `/edu/course/addCourseInfo`,
            method: 'post',
            data:courseInfo
          })
    },
    getTeacherList(){
        return request({
            url: `/edu/teacher/findAll`,
            method: 'get',
          })
    },
    getCourseById(courseId){
        return request({
            url: `/edu/course/${courseId}`,
            method: 'get',
          })
    }, 
    updateCourse(courseInfo){
        return request({
            url: `/edu/course/update`,
            method: 'put',
            data:courseInfo
          })
    }
}