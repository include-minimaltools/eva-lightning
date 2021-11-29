using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace eva_lightning.Controllers
{
    [Route("api/[controller]")]
    public class CourseController : Controller
    {
        private UniModel _context;
        public CourseController(UniModel context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get() =>
        (from c in _context.COURSE
         select new
         {
             c.ID_COURSE,
             c.NAME,
             c.DESCRIPTION,
             c.OBJECTS,
             c.CREDITS,
             c.FRECUENCY,
             c.HOURS,
             c.ID_CAREER,
             c.USER_CREATE,
             c.DATE_CREATE,
             c.USER_UPDATE,
             c.DATE_UPDATE
         }).ToList();

        [HttpGet("[action]")]
        public dynamic GetById(int ID_COURSE) =>
            (from c in _context.COURSE
            select new
            {
                c.ID_COURSE,
                c.NAME,
                c.DESCRIPTION,
                c.OBJECTS,
                c.CREDITS,
                c.FRECUENCY,
                c.HOURS,
                c.ID_CAREER,
                c.USER_CREATE,
                c.DATE_CREATE,
                c.USER_UPDATE,
                c.DATE_UPDATE
            }).FirstOrDefault(x => x.ID_COURSE == ID_COURSE);


        [HttpPost]
        public JsonResult InsertOrUpdate()
        {
            return null;
        }
    }
}