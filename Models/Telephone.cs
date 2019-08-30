
namespace ContactBook.Models
{
    public class Telephone
    {
        public int Id { get; set; }
        public long PhoneNumber { get; set; }
        
        public int ContactId { get; set; }
    }
}
