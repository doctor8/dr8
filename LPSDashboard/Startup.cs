using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LPSDashboard.Startup))]
namespace LPSDashboard
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
