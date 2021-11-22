using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eva_lightning.Controllers
{
    public class TeacherController : Controller
    {
        private UniModel _context;

        public TeacherController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.TEACHER.ToList() select new { c.ID_TEACHER, c.NAME, c.LASTNAME, c.ADDRESS, c.PHONE, c.ID_FACULTY ,c.EMAIL, c.USER_CREATE, c.DATE_CREATE });

        [HttpGet]
        public dynamic GetById(string IdTeacher)
            => (from c in _context.TEACHER.ToList() where c.ID_TEACHER == IdTeacher select new { c.ID_TEACHER, c.NAME, c.LASTNAME, c.ADDRESS, c.PHONE, c.ID_FACULTY, c.EMAIL, c.USER_CREATE, c.DATE_CREATE });

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(TEACHER element)
        {
            TEACHER teacher = _context.TEACHER.FirstOrDefault(x => x.ID_TEACHER == element.ID_TEACHER);
            if (teacher == null)
            {
                _context.TEACHER.Add(new TEACHER()
                {
                    ID_TEACHER = element.ID_TEACHER,
                    NAME = element.NAME,
                    LASTNAME = element.LASTNAME,
                    ADDRESS = element.ADDRESS,
                    PHONE = element.PHONE,
                    EMAIL = element.EMAIL,
                    ID_FACULTY = element.ID_FACULTY,
                    DATE_CREATE = element.DATE_CREATE = DateTime.Now,
                    USER_CREATE = "admin"
                });
            }
            else
            {
                teacher.NAME = element.NAME;
                teacher.LASTNAME = element.LASTNAME;
                teacher.ADDRESS = element.ADDRESS;
                teacher.PHONE = element.PHONE;

                teacher.DATE_UPDATE = DateTime.Now;
                teacher.USER_UPDATE = "admin";

                _context.Entry(teacher).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}