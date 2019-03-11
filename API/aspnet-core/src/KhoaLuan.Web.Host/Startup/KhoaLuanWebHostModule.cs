using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using KhoaLuan.Configuration;

namespace KhoaLuan.Web.Host.Startup
{
    [DependsOn(
       typeof(KhoaLuanWebCoreModule))]
    public class KhoaLuanWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public KhoaLuanWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(KhoaLuanWebHostModule).GetAssembly());
        }
    }
}
