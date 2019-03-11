using System.ComponentModel.DataAnnotations;

namespace KhoaLuan.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}