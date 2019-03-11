using Microsoft.AspNetCore.Antiforgery;
using KhoaLuan.Controllers;

namespace KhoaLuan.Web.Host.Controllers
{
    public class AntiForgeryController : KhoaLuanControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
