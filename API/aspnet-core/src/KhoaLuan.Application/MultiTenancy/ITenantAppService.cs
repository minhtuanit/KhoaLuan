using Abp.Application.Services;
using Abp.Application.Services.Dto;
using KhoaLuan.MultiTenancy.Dto;

namespace KhoaLuan.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

