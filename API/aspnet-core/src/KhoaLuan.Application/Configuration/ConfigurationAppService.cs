using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using KhoaLuan.Configuration.Dto;

namespace KhoaLuan.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : KhoaLuanAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
