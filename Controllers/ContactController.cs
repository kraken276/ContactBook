using ContactBook.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactBook.Controllers
{
    public class ContactController : Controller
    {
        ApplicationContext db;
        public ContactController()
        {
            db = new ApplicationContext();
        }

        public IActionResult GetContacts()
        {
            return Json(db.Contacts.ToList());
        }

        public IActionResult Create(string firstName, string lastName, string patronymic, string address)
        {
            Contact contact = new Contact()
            {
                FirstName = firstName,
                LastName = lastName,
                Patronymic = patronymic,
                Address = address
            };
            db.Contacts.Add(contact);
            db.SaveChanges();
            return Json(contact.Id);
        }

        public IActionResult Edit(int id, string firstName, string lastName, string patronymic, string address)
        {
            if (firstName != "")
                db.Contacts.Find(id).FirstName = firstName;
            if (lastName != "")
                db.Contacts.Find(id).LastName = lastName;
            if (patronymic != "")
                db.Contacts.Find(id).Patronymic = patronymic;
            if (address != "")
                db.Contacts.Find(id).Address = address;

            db.SaveChanges();

            return Json("success");
        }
    }
}
