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
    public class StudentCourseController : Controller
    {
        private UniModel _context;

        public StudentCourseController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
        => (from sc in _context.STUDENT_COURSE
            select new
            {
                sc.ID_COURSE,
                sc.ID_STUDENT,
                sc.USER_CREATE,
                sc.DATE_CREATE,
                sc.USER_UPDATE,
                sc.DATE_UPDATE
            }).ToList();

        [HttpGet]
        public dynamic GetById(string ID_STUDENT, int ID_COURSE)
            => (from sc in _context.STUDENT_COURSE
                select new
                {
                    sc.ID_COURSE,
                    sc.ID_STUDENT,
                    sc.USER_CREATE,
                    sc.DATE_CREATE,
                    sc.USER_UPDATE,
                    sc.DATE_UPDATE
                }).FirstOrDefault(x => x.ID_STUDENT == ID_STUDENT && x.ID_COURSE == ID_COURSE);

        [HttpPost]
        public JsonResult InsertOrUpdate(STUDENT_COURSE entity)
        {
            return null;
        }
    }
}