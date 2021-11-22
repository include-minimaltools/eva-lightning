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
    public class PermissionController : Controller
    {
        
        private UniModel _context;

        public PermissionController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get() 
            => (from c in _context.PERMISSION.ToList() select new { c.DESCRIPTION, c.PAGE, c.ACTION });

        [HttpGet]
        public dynamic GetById(string IdPermisson) 
            => (from c in _context.PERMISSION.ToList() where c.ID_PERMISSION == IdPermisson select new { c.DESCRIPTION, c.PAGE, c.ACTION });

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(PERMISSION element)
        {
            PERMISSION permission = _context.PERMISSION.FirstOrDefault(x => x.ID_PERMISSION == element.ID_PERMISSION);
            if (permission == null)
            {
                _context.PERMISSION.Add(new PERMISSION()
                {
                    ID_PERMISSION= element.ID_PERMISSION,
                    DESCRIPTION = element.DESCRIPTION,
                    PAGE= element.PAGE,
                    ACTION = element.ACTION,
                    DATE_CREATE = element.DATE_CREATE = DateTime.Now,
                    USER_CREATE = "admin"
                });
            }
            else
            {
                permission.PAGE = element.PAGE;
                permission.DESCRIPTION = element.DESCRIPTION;

                permission.DATE_UPDATE = DateTime.Now;
                permission.USER_UPDATE = "admin";
                _context.Entry(permission).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}