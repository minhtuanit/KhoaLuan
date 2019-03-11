using Abp.Application.Services.Dto;

namespace KhoaLuan.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

