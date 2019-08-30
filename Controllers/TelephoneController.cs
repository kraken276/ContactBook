using ContactBook.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactBook.Controllers
{
    public class TelephoneController : Controller
    {
        ApplicationContext db;
        public TelephoneController()
        {
            db = new ApplicationContext();
        }

        public IActionResult GetTelephones(int contactId)
        {
            var res = from a in db.Telephones
                      where a.ContactId == contactId
                      select a;
            return Json(res.ToList());
        }

        public IActionResult Create(long phoneNumber, int contactId)
        {
            Telephone telephone = new Telephone()
            {
                PhoneNumber = phoneNumber,
                ContactId = contactId
            };
            db.Telephones.Add(telephone);
            db.SaveChanges();
            return Json(telephone.Id);
        }

        public IActionResult Edit(int id, long phoneNumber)
        {
            db.Telephones.Find(id).PhoneNumber = phoneNumber;
            db.SaveChanges();
            return Json("success");
        }
    }
}
