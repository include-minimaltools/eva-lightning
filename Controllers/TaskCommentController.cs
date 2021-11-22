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
    public class TaskCommentController : Controller
    {
        private UniModel _context;

        public TaskCommentController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
            => (from c in _context.TASK_COMMENT.ToList() select new { c.ID_TASK_COMMENT, c.ID_STUDENT_TASK ,c.EMAIL_USER, c.TYPE_TASK, c.DESCRIPTION, c.USER_CREATE, c.DATE_CREATE });

        [HttpGet]
        public dynamic GetById(string IdTaskComment)
        => (from c in _context.TASK_COMMENT.ToList() where c.ID_TASK_COMMENT == IdTaskComment select new { c.ID_TASK_COMMENT, c.ID_STUDENT_TASK, c.EMAIL_USER, c.TYPE_TASK, c.DESCRIPTION, c.USER_CREATE, c.DATE_CREATE });

        [HttpPost]
        public HttpResponseMessage InsertOrUpdate(TASK_COMMENT element)
        {
            TASK_COMMENT taskcomment = _context.TASK_COMMENT.FirstOrDefault(x => x.ID_TASK_COMMENT == element.ID_TASK_COMMENT);
            if (taskcomment == null)
            {
                _context.TASK_COMMENT.Add(new TASK_COMMENT()
                {
                    ID_TASK_COMMENT = element.ID_TASK_COMMENT,
                    ID_STUDENT_TASK = element.ID_STUDENT_TASK,
                    EMAIL_USER = element.EMAIL_USER,
                    TYPE_TASK = element.TYPE_TASK,
                    DESCRIPTION = element.DESCRIPTION,
                    DATE_CREATE = element.DATE_CREATE = DateTime.Now,
                    USER_CREATE = "admin"
                });
            }
            else
            {
                taskcomment.TYPE_TASK = element.TYPE_TASK;
                taskcomment.DESCRIPTION = element.DESCRIPTION;

                taskcomment.DATE_UPDATE = DateTime.Now;
                taskcomment.USER_UPDATE = "admin";
                _context.Entry(taskcomment).State = EntityState.Modified;
            }

            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}