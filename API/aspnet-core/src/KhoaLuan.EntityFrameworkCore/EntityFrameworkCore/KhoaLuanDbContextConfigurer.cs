using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace KhoaLuan.EntityFrameworkCore
{
    public static class KhoaLuanDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<KhoaLuanDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<KhoaLuanDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
