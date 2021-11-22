using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eva_lightning.Controllers
{
    public class GroupsController : Controller
    {
        private UniModel _context;

        public GroupsController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get() =>
        (from c in _context.GROUPS.ToList() select new { c.ID_GROUPS, c.NAME });

        [HttpGet]
        public dynamic GetById(string IdGroups) =>
        (from c in _context.GROUPS.ToList() where c.ID_GROUPS == IdGroups select new { c.ID_GROUPS, c.NAME});

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(GROUPS element)
        {
            GROUPS groups = _context.GROUPS.FirstOrDefault(x => x.ID_GROUPS == element.ID_GROUPS);
            if (groups == null)
            {
                _context.GROUPS.Add(new GROUPS()
                {
                    ID_GROUPS = element.ID_GROUPS,
                    NAME = element.NAME
                });
            }
            else
            {
                groups.NAME = element.NAME;

                _context.Entry(groups).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}