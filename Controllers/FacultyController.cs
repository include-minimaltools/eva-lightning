using System.Collections.Generic;
using System.Linq;
using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;

namespace eva_lightning.Controllers
{
    [Route("api/[controller]")]
    public class FacultyController : Controller
    {
        private UniModel _context;

        public FacultyController(UniModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> Get() =>
        (from f in _context.FACULTY
         select new
         {
             f.ID_FACULTY,
             f.DESCRIPTION,
             f.USER_CREATE,
             f.DATE_CREATE,
             f.USER_UPDATE,
             f.DATE_UPDATE
         }).ToList();

        [HttpGet]
        public dynamic GetById(string ID_FACULTY) =>
        (from f in _context.FACULTY
         select new
         {
             f.ID_FACULTY,
             f.DESCRIPTION,
             f.USER_CREATE,
             f.DATE_CREATE,
             f.USER_UPDATE,
             f.DATE_UPDATE
         }).FirstOrDefault(x => x.ID_FACULTY == ID_FACULTY);

        [HttpPost]
        public JsonResult InsertOrUpdate()
        {
            return null;
        }
    }
}