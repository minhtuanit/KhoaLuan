using System.Threading.Tasks;
using Abp.Application.Services;
using KhoaLuan.Sessions.Dto;

namespace KhoaLuan.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
