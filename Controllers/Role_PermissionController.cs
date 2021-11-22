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
    public class Role_PermissionController : Controller
    {
        private UniModel _context;

        public Role_PermissionController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.ROLE_PERMISSION.ToList() select new { c.ID_ROLE, c.ID_ROLE_PERMISSION, c.ID_PERMISSION});

        [HttpGet]
        public dynamic GetById(string IdRole, string IdPermission)
            => (from c in _context.ROLE_PERMISSION.ToList() where ( c.ID_ROLE == IdRole && c.ID_PERMISSION== IdPermission) select new { c.ID_ROLE_PERMISSION, c.ID_ROLE, c.ID_PERMISSION});


        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(ROLE_PERMISSION element)
        {
            ROLE_PERMISSION Role_Permission = _context.ROLE_PERMISSION.FirstOrDefault(x => x.ID_ROLE_PERMISSION == element.ID_ROLE_PERMISSION);
            if (Role_Permission == null)
            {
                _context.ROLE_PERMISSION.Add(new ROLE_PERMISSION()
                {
                    ID_ROLE_PERMISSION = element.ID_ROLE_PERMISSION,
                    DATE_CREATE = element.DATE_CREATE = DateTime.Now,
                    USER_CREATE = "admin"
                });
            }
            else
            {
                Role_Permission.ID_ROLE_PERMISSION= element.ID_ROLE_PERMISSION;
                Role_Permission.DATE_UPDATE = DateTime.Now;
                Role_Permission.USER_UPDATE = "admin";
                _context.Entry(Role_Permission).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}