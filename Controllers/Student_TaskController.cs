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
    public class Student_TaskController : Controller
    {
        private UniModel _context;

        public Student_TaskController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.STUDENT_TASK.ToList() select new { c.ID_STUDENT,c.ID_TASK, c.QUALIFICATION, c.SEND_DATE, c.TASK_FILE});

        [HttpGet]
        public dynamic GetById(string IdStudent, string IdTask)
            => (from c in _context.STUDENT_TASK.ToList() where c.ID_STUDENT == IdStudent && c.ID_TASK == IdTask select new { c.ID_STUDENT, c.ID_TASK, c.QUALIFICATION, c.SEND_DATE, c.TASK_FILE });
            
        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(STUDENT_TASK element)
        {
            STUDENT_TASK Student_Task= _context.STUDENT_TASK.FirstOrDefault(x => x.ID_STUDENT_TASK== element.ID_STUDENT);
            if (Student_Task== null)
            {
                _context.STUDENT_TASK.Add(new STUDENT_TASK()
                {
                    ID_STUDENT_TASK = element.ID_TASK,
                    QUALIFICATION = element.QUALIFICATION,
                    SEND_DATE= element.SEND_DATE,
                    DATE_CREATE = element.DATE_CREATE = DateTime.Now,
                    USER_CREATE = "admin"
                });
            }
            else
            {
                Student_Task.ID_STUDENT_TASK = element.ID_TASK;
                Student_Task.QUALIFICATION = element.QUALIFICATION;
                Student_Task.SEND_DATE = element.SEND_DATE = DateTime.Now;
                Student_Task.DATE_CREATE = element.DATE_CREATE = DateTime.Now;
                Student_Task.USER_CREATE = "admin";
                _context.Entry(Student_Task).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

    }
}