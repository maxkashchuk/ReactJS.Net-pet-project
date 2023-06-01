using System.ComponentModel.DataAnnotations.Schema;

namespace ReactJS.NetTest.Models.Controller_models
{
    [NotMapped]
    public class UserRegister
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Nickname { get; set; }
        public string Password { get; set; }
        public string PasswordConfiramtion { get; set; }
        public string DateTime { get; set; }
        public string Image { get; set; }
    }
}
