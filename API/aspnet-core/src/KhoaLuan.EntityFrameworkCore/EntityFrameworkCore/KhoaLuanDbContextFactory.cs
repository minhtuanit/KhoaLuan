using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using KhoaLuan.Configuration;
using KhoaLuan.Web;

namespace KhoaLuan.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class KhoaLuanDbContextFactory : IDesignTimeDbContextFactory<KhoaLuanDbContext>
    {
        public KhoaLuanDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<KhoaLuanDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            KhoaLuanDbContextConfigurer.Configure(builder, configuration.GetConnectionString(KhoaLuanConsts.ConnectionStringName));

            return new KhoaLuanDbContext(builder.Options);
        }
    }
}
