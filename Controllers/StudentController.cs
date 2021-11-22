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
    public class StudentController : Controller
    {
        private UniModel _context;

        public StudentController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from s in _context.STUDENT
                select new
                {
                    s.CARNET,
                    s.NAME,
                    s.LASTNAME,
                    s.ADDRESS,
                    s.PHONE,
                    s.EMAIL,
                    s.ID_CAREER,
                    s.ID_GROUPS,
                    s.USER_CREATE,
                    s.DATE_CREATE,
                    s.USER_UPDATE,
                    s.DATE_UPDATE
                }).ToList();


        [HttpGet]
        public dynamic GetById(string Carnet)
            => (from s in _context.STUDENT
                select new
                {
                    s.CARNET,
                    s.NAME,
                    s.LASTNAME,
                    s.ADDRESS,
                    s.PHONE,
                    s.EMAIL,
                    s.ID_CAREER,
                    s.ID_GROUPS,
                    s.USER_CREATE,
                    s.DATE_CREATE,
                    s.USER_UPDATE,
                    s.DATE_UPDATE
                }).FirstOrDefault(x => x.CARNET == Carnet);

        [HttpPost]
        public JsonResult InsertOrUpdate()
        {
            return null;
        }
    }
}