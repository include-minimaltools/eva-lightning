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
    public class CampusController : Controller
    {
        private UniModel _context;

        public CampusController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
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
    }
}