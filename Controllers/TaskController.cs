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
    [Route("api/[controller]")]
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

        [HttpGet("[action]")]
        public IEnumerable<dynamic> Get()
            => (from c in _context.TASK.ToList() select new { c.ID_TASK, c.NAME, c.DESCRIPTION, c.DELIVERY_DATE, c.ID_COURSE, c.ID_TYPE_TASK });

        [HttpGet("[action]")]
        public dynamic GetById(string IdTask)
            => (from t in _context.TASK.ToList()
                where t.ID_TASK == IdTask
                select new
                {
                    id_task = t.ID_TASK,
                    task_name = t.NAME,
                    task_description = t.DESCRIPTION,
                    task_delivery_date = t.DELIVERY_DATE,
                    task_course = t.ID_COURSE,
                    task_type = t.ID_TYPE_TASK
                }).FirstOrDefault();

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

        [HttpGet("[action]")]
        public dynamic GetByCourse(int IdCourse, string Type)
        {
            var course = _context.COURSE.FirstOrDefault(x => x.ID_COURSE == IdCourse);

            var tasks = from t in _context.TASK
                        where t.ID_COURSE == IdCourse && t.ID_TYPE_TASK == Type
                        select new
                        {
                            id_task = t.ID_TASK,
                            task_name = t.NAME,
                            task_description = t.DESCRIPTION,
                            task_delivery_date = t.DELIVERY_DATE,
                            task_course = t.ID_COURSE,
                            task_type = t.ID_TYPE_TASK
                        };

            return new
            {
                tasks = tasks,
                course = course
            };
        }

        [HttpGet("[action]")]
        public dynamic GetByStudent(string Carnet)
        {
            var tasks = from sc in _context.STUDENT_COURSE
                        join c in _context.COURSE on sc.ID_COURSE equals c.ID_COURSE
                        join t in _context.TASK on c.ID_COURSE equals t.ID_COURSE
                        where sc.ID_STUDENT == Carnet
                        select new
                        {
                            id_task = t.ID_TASK,
                            task_name = t.NAME,
                            task_description = t.DESCRIPTION,
                            task_delivery_date = t.DELIVERY_DATE,
                            task_course = t.ID_COURSE,
                            task_type = t.ID_TYPE_TASK
                        };

            return tasks;
        }
    }
}