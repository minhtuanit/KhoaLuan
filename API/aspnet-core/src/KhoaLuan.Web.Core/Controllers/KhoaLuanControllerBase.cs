using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace KhoaLuan.Controllers
{
    public abstract class KhoaLuanControllerBase: AbpController
    {
        protected KhoaLuanControllerBase()
        {
            LocalizationSourceName = KhoaLuanConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
