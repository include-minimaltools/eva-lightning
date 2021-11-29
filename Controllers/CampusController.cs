using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace eva_lightning.Controllers
{
     [Route("api/[controller]")]

    public class CampusController : Controller
    {
               private UniModel _context;

        public CampusController(UniModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> Get() =>
        (from c in _context.CAMPUS select new { c.ID_CAMPUS, c.DESCRIPTION, c.ADDRESS, c.USER_CREATE, c.DATE_CREATE }).ToList();

        [HttpGet]
        public dynamic GetById(string IdCampus) =>
        from c in _context.CAMPUS.ToList() where c.ID_CAMPUS == IdCampus select new { c.ID_CAMPUS, c.DESCRIPTION, c.ADDRESS, c.USER_CREATE, c.DATE_CREATE };

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(CAMPUS element)
        {
            CAMPUS campus = _context.CAMPUS.FirstOrDefault(x => x.ID_CAMPUS == element.ID_CAMPUS);
            if (campus == null)
            {
                _context.CAMPUS.Add(new CAMPUS()
                {
                    ID_CAMPUS = element.ID_CAMPUS,
                    DESCRIPTION = element.DESCRIPTION,
                    ADDRESS = element.ADDRESS,
                    DATE_CREATE = element.DATE_CREATE = DateTime.Now,
                    USER_CREATE = "admin"
                });
            }
            else
            {
                campus.ADDRESS = element.ADDRESS;
                campus.DESCRIPTION = element.DESCRIPTION;

                campus.DATE_UPDATE = DateTime.Now;
                campus.USER_UPDATE = "admin";
                _context.Entry(campus).State = EntityState.Modified;
            }
            _context.SaveChanges();
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
        [HttpGet("[action]")]
        public dynamic GetAboutInfo(int id)
        {
            var query = (from course in _context.COURSE.Where(x => x.ID_COURSE == id)
                         join career in _context.CAREER on course.ID_CAREER equals career.ID_CAREER
                         join faculty in _context.FACULTY on career.FACULTY equals faculty.ID_FACULTY
                         join campus in _context.CAMPUS on career.CAMPUS equals campus.ID_CAMPUS
                         join semester in _context.SEMESTER on course.ID_COURSE equals semester.ID_COURSE
                         join teacher_course in _context.TEACHER_COURSE on course.ID_COURSE equals teacher_course.ID_COURSE
                         join teacher in _context.TEACHER on teacher_course.ID_TEACHER equals teacher.ID_TEACHER
                         join teacher_groups in _context.TEACHER_GROUPS on teacher.ID_TEACHER equals teacher_groups.ID_TEACHER
                         join groups in _context.GROUPS on teacher_groups.ID_GROUPS equals groups.ID_GROUPS 
                         select new
                         {
                             course_name = course.NAME,
                             campus_name = campus.DESCRIPTION,
                             faculty_name = faculty.DESCRIPTION,
                             career_name = career.DESCRIPTION,
                             teacher_name = teacher.NAME,
                             semester = semester.N_SEMESTER,
                             groups = groups.NAME
                         }).FirstOrDefault();
            return query;
        }
    }
}