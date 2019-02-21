using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo.Models
{
    public class Message
    {
        //[Required]
        public string message { get; set; }
        public int Id { get; set; }
        public string comments { get; set; }
        public int count { get; set; }
    }
}
