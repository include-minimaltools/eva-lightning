﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eva_lightning.Controllers
{
    [Route("api/[controller]")]
    public class TeacherCourseController : Controller
    {
        private UniModel _context;

        public TeacherCourseController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.TEACHER_COURSE.ToList() select new { c.ID_TEACHER, c.ID_COURSE ,c.USER_CREATE, c.DATE_CREATE });

        [HttpGet("[action]")]
        public dynamic GetById(string IdTeacher, int IdCourse)
            => (from c in _context.TEACHER_COURSE.ToList() where (c.ID_TEACHER == IdTeacher && c.ID_COURSE == IdCourse)  select new { c.ID_TEACHER, c.ID_COURSE, c.USER_CREATE, c.DATE_CREATE });

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(TEACHER_COURSE element)
        {
            TEACHER_COURSE teachercourse = _context.TEACHER_COURSE.FirstOrDefault(x => (x.ID_TEACHER == element.ID_TEACHER && x.ID_COURSE == element.ID_COURSE));
            if (teachercourse == null)
            {
                _context.TEACHER_COURSE.Add(new TEACHER_COURSE()
                {
                    ID_TEACHER = element.ID_TEACHER,
                    ID_COURSE = element.ID_COURSE,
                    DATE_CREATE = element.DATE_CREATE = DateTime.Now,
                    USER_CREATE = "admin"
                });
            }
            else
            {
                teachercourse.ID_COURSE = element.ID_COURSE;
                teachercourse.DATE_UPDATE = DateTime.Now;
                teachercourse.USER_UPDATE = "admin";

                _context.Entry(teachercourse).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}