using System.Collections.Generic;
using System.Linq;
using eva_lightning.Models;
using Microsoft.AspNetCore.Mvc;

namespace eva_lightning.Controllers
{
    [Route("api/[controller]")]
    public class CareerController : Controller
    {
        
        private UniModel _context;
        public CareerController(UniModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> Get() =>
            (from c in _context.CAREER
            select new
            {
                c.ID_CAREER,
                c.DESCRIPTION,
                c.FACULTY,
                c.CAMPUS,
                c.USER_CREATE,
                c.DATE_CREATE,
                c.USER_UPDATE,
                c.DATE_UPDATE
            }).ToList();

        [HttpGet]
        public dynamic GetById(string ID_CARRER) =>
            (from c in _context.CAREER
            select new
            {
                c.ID_CAREER,
                c.DESCRIPTION,
                c.FACULTY,
                c.CAMPUS,
                c.USER_CREATE,
                c.DATE_CREATE,
                c.USER_UPDATE,
                c.DATE_UPDATE
            }).FirstOrDefault(x => x.ID_CAREER == ID_CARRER);

        [HttpPost]
        public JsonResult InsertOrUpdate()
        {
            return null;
        }
    }
}