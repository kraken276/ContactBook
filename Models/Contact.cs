
using System.Collections.Generic;

namespace ContactBook.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public string Address { get; set; }
        public List<Telephone> Telephones { get; set; }

        public Contact()
        {
            Telephones = new List<Telephone>();
        }
    }
}
