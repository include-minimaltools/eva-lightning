using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace eva_lightning.Controllers
{
    [Route("api/[controller]")]
    public class CourseController : Controller
    {
        private UniModel _context;
        public CourseController(UniModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> Get() =>
        (from c in _context.COURSE
         select new
         {
             c.ID_COURSE,
             c.NAME,
             c.DESCRIPTION,
             c.OBJECTS,
             c.CREDITS,
             c.FRECUENCY,
             c.HOURS,
             c.ID_CAREER,
             c.USER_CREATE,
             c.DATE_CREATE,
             c.USER_UPDATE,
             c.DATE_UPDATE
         }).ToList();

        [HttpGet("[action]")]
        public dynamic GetById(int ID_COURSE) =>
            (from c in _context.COURSE
             select new
             {
                 c.ID_COURSE,
                 c.NAME,
                 c.DESCRIPTION,
                 c.OBJECTS,
                 c.CREDITS,
                 c.FRECUENCY,
                 c.HOURS,
                 c.ID_CAREER,
                 c.USER_CREATE,
                 c.DATE_CREATE,
                 c.USER_UPDATE,
                 c.DATE_UPDATE
             }).FirstOrDefault(x => x.ID_COURSE == ID_COURSE);

        [HttpPost]
        public JsonResult InsertOrUpdate()
        {
            return null;
        }

           [HttpGet("[action]")]

        public dynamic GetAboutInfo(){

         var query = (from c in _context.COURSE
                    join course_name in _context.COURSE on c.ID_COURSE equals course_name.ID_COURSE
                    join career_name in _context.CAREER on course_name.ID_CAREER equals career_name.ID_CAREER
                    join semester in _context.SEMESTER on course_name.ID_COURSE equals semester.ID_COURSE
                    join teacher_course in _context.TEACHER_COURSE on course_name.ID_COURSE equals teacher_course.ID_COURSE
                    join teacher in _context.TEACHER on teacher_course.ID_TEACHER equals teacher.ID_TEACHER
                    join teacher_groups in _context.TEACHER_GROUPS on teacher.ID_TEACHER equals teacher_groups.ID_TEACHER
                    join groups in _context.GROUPS on teacher_groups.ID_GROUPS equals groups.ID_GROUPS
                    join student in _context.GROUPS on groups.ID_GROUPS equals student.ID_GROUPS 
                    join groups_name in _context.GROUPS on student.ID_GROUPS equals groups_name.ID_GROUPS
                    select new
                    {
                        course_name = course_name.NAME,
                        career_name = career_name.DESCRIPTION,
                        groups_name = groups_name.NAME,
                        semester_name = semester.N_SEMESTER
                    }).ToList();
                return query;
        }
        
        [HttpGet("[action]")]
        public IEnumerable<dynamic> GetCoursesByStudent(string carnet)
        {
            var courses = (from cs in _context.STUDENT_COURSE
                          join c in _context.COURSE on cs.ID_COURSE equals c.ID_COURSE
                          where cs.ID_STUDENT == carnet
                          select new
                          {
                              id_course = c.ID_COURSE,
                              name = c.NAME,
                              description = c.DESCRIPTION
                          }).ToList();

            return courses;
        }
    }
}