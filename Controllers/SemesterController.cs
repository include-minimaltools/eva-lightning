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
    public class SemesterController : Controller
    {
        private UniModel _context;

        public SemesterController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.SEMESTER.ToList() select new { c.ID_SEMESTER, c.N_SEMESTER, c.ID_CAREER, c.ID_COURSE});
        


        [HttpGet]
        public dynamic GetById(string IdCarrer, int IdCourse)
            => (from c in _context.SEMESTER.ToList() where (c.ID_CAREER == IdCarrer && c.ID_COURSE == IdCourse) select new { c.ID_SEMESTER, c.N_SEMESTER, c.ID_CAREER, c.ID_COURSE});

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(SEMESTER element)
        {
            SEMESTER Semester = _context.SEMESTER.FirstOrDefault(x => x.ID_SEMESTER == element.ID_SEMESTER);
            if (Semester == null)
            {
                _context.SEMESTER.Add(new SEMESTER()
                {
                    ID_SEMESTER = element.ID_SEMESTER,
                    N_SEMESTER =element.N_SEMESTER
                });
            }
            else
            {
                Semester.ID_SEMESTER = element.ID_SEMESTER;
                Semester.N_SEMESTER = element.N_SEMESTER;
                _context.Entry(Semester).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}