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
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private UniModel _context;

        public UserController(UniModel context)
        {
            _context = context;
        }



        [HttpGet("[action]")]
        public dynamic Login(string email, string password)
        {
            var user = _context.USERS.Where(x => x.EMAIL == email && x.PASSWORD == password).ToList();
            var student = _context.STUDENT.Where(x => x.EMAIL == email).ToList();
            var teacher = _context.TEACHER.Where(x => x.EMAIL == email).ToList();

            if (user.Count == 0)
            {
                return new { status = "error", message = "User not found" };
            }

            if (student.Count != 0)
            {
                return new
                {
                    status = "success",
                    message = "Se ha iniciado sesión correctamente",
                    user = (from s in student
                            select new
                            {
                                carnet = s.CARNET,
                                name = s.NAME,
                                lastname = s.LASTNAME,
                                address = s.ADDRESS,
                                phone = s.PHONE,
                                email = s.EMAIL,
                                id_career = s.ID_CAREER,
                                id_groups = s.ID_GROUPS,
                            }).First()
                };
            }
            else if (teacher.Count != 0)
            {
                return new
                {
                    status = "success",
                    message = "Se ha iniciado sesión correctamente",
                    user = (from t in teacher
                            select new
                            {
                                id_teacher = t.ID_TEACHER,
                                name = t.NAME,
                                lastname = t.LASTNAME,
                                address = t.ADDRESS,
                                phone = t.PHONE,
                                email = t.EMAIL
                            }).First()
                };
            }
            else
            {
                return new { status = "error", message = "User not found" };
            }
        }
    }
}