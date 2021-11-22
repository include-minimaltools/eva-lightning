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
    public class RoleController : Controller
    {
        private UniModel _context;

        public RoleController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
        => (from r in _context.ROLE
            select new
            {
                r.ID_ROLE,
                r.DESCRIPTION,
                r.USER_CREATE,
                r.DATE_CREATE,
                r.USER_UPDATE,
                r.DATE_UPDATE
            }).ToList();


        [HttpGet]
        public dynamic GetById(string role)
        => (from r in _context.ROLE
            select new
            {
                r.ID_ROLE,
                r.DESCRIPTION,
                r.USER_CREATE,
                r.DATE_CREATE,
                r.USER_UPDATE,
                r.DATE_UPDATE
            }).FirstOrDefault(x => x.ID_ROLE == role);

        [HttpPost]
        public JsonResult InsertOrUpdate()
        {
            return null;
        }
    }
}