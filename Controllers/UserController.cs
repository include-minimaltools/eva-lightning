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
            var user = (from u in _context.USERS
                        where u.EMAIL == email && u.PASSWORD == password
                        select new
                        {
                            email = u.EMAIL,
                            password = u.PASSWORD
                        }).First();
            return user;
        }
    }
}