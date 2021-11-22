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
    public class UserController : Controller
    {
        private UniModel _context;

        public UserController(UniModel context)
        {
            _context = context;
        }

        public bool IsValidUser(string username, string password)
        {
            var user = _context.USERS.FirstOrDefault(x => x.EMAIL == username && x.PASSWORD == password);
            if (user != null)
            {
                return true;
            }
            return false;
        }
    }
}