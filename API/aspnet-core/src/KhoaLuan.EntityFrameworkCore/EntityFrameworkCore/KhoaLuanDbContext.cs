using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using KhoaLuan.Authorization.Roles;
using KhoaLuan.Authorization.Users;
using KhoaLuan.MultiTenancy;

namespace KhoaLuan.EntityFrameworkCore
{
    public class KhoaLuanDbContext : AbpZeroDbContext<Tenant, Role, User, KhoaLuanDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public KhoaLuanDbContext(DbContextOptions<KhoaLuanDbContext> options)
            : base(options)
        {
        }
    }
}
