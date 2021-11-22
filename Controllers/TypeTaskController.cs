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
    public class TypeTaskController : Controller
    {
        private UniModel _context;

        public TypeTaskController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.TYPE_TASK.ToList() select new { c.ID_TYPE_TASK, c.DESCRIPTION });

        [HttpGet]
        public dynamic GetById(string IdTypeTask)
            => (from c in _context.TYPE_TASK.ToList() where c.ID_TYPE_TASK == IdTypeTask select new { c.ID_TYPE_TASK, c.DESCRIPTION });

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(TYPE_TASK element)
        {
            TYPE_TASK typetask = _context.TYPE_TASK.FirstOrDefault(x => x.ID_TYPE_TASK == element.ID_TYPE_TASK);
            if (typetask == null)
            {
                _context.TYPE_TASK.Add(new TYPE_TASK()
                {
                    ID_TYPE_TASK = element.ID_TYPE_TASK,
                    DESCRIPTION = element.DESCRIPTION
                });
            }
            else
            {
                typetask.DESCRIPTION = element.DESCRIPTION;

                _context.Entry(typetask).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}