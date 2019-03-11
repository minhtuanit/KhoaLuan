using System.Threading.Tasks;
using KhoaLuan.Configuration.Dto;

namespace KhoaLuan.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
