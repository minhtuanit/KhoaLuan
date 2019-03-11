using Abp.Authorization;
using KhoaLuan.Authorization.Roles;
using KhoaLuan.Authorization.Users;

namespace KhoaLuan.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
