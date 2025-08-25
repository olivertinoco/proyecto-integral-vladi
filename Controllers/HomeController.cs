using Microsoft.AspNetCore.Mvc;
using General.Librerias.AccesoDatos;

namespace PnpDotacionCombustible.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IWebHostEnvironment _env;
    private readonly IConfiguration _configuration;

    public HomeController(ILogger<HomeController> logger, IWebHostEnvironment env, IConfiguration configuration)
    {
        _logger = logger;
        _env = env;
        _configuration = configuration;
    }

    public IActionResult Index()
    {
        ViewBag.IsDevelopment = _env.IsDevelopment();
        return View();
    }


    [HttpPost]
    public string TraerListaMenus()
    {
        try
        {
            string rpta = "";
            string user = Request.Form["data1"].ToString();
            string clave = Request.Form["data2"].ToString();
            string usuario = $"{user}|{clave}";

            daSQL odaSQL = new daSQL(_configuration, "Cnx");
            rpta = odaSQL.ejecutarComando("dbo.usp_listarMenus22", "@data", usuario);
            if (rpta == "")
            {
                _logger.LogError("dbo.usp_listarMenus22 '{data}'", usuario);
                rpta = "error";
            }
            return rpta;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error en backend:");
            return "error";
        }
    }

}
