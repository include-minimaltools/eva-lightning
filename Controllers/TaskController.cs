using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using eva_lightning.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eva_lightning.Controllers
{
    public class TaskController : Controller
    {
        private UniModel _context;

        public TaskController(UniModel context)
        {
            _context = context;
        }

        // public class FileUpload
        // {
        //     public int Id { get; set; }
        //     public IFormFile File { get; set; }
        // }


        
        // [HttpPost]
        // [Consumes("multipart/form-data")]
        // public async Task SaveFile(FileUpload file)
        // {
            
        // }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.TASK.ToList() select new { c.ID_TASK, c.NAME, c.DESCRIPTION, c.DELIVERY_DATE, c.ID_COURSE, c.ID_TYPE_TASK });

        [HttpGet]
        public dynamic GetById(string IdTask)
            => (from c in _context.TASK.ToList() where c.ID_TASK == IdTask select new { c.ID_TASK, c.NAME, c.DESCRIPTION, c.DELIVERY_DATE, c.ID_COURSE, c.ID_TYPE_TASK });

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(TASK element)
        {
            TASK task = _context.TASK.FirstOrDefault(x => x.ID_TASK == element.ID_TASK);
            if (task == null)
            {
                _context.TASK.Add(new TASK()
                {
                    ID_TASK = element.ID_TASK,
                    NAME = element.NAME,
                    DESCRIPTION = element.DESCRIPTION,
                    DELIVERY_DATE = element.DELIVERY_DATE,
                    ID_COURSE = element.ID_COURSE,
                    ID_TYPE_TASK = element.ID_TYPE_TASK
                });
            }
            else
            {
                task.NAME = element.NAME;
                task.DESCRIPTION = element.DESCRIPTION;
                task.DELIVERY_DATE = element.DELIVERY_DATE;

                _context.Entry(task).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}