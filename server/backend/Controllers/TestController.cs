using Microsoft.AspNetCore.Mvc;

namespace portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetMessage()
        {
            return Ok(new { message = "All about my Work Experience" });
        }
    }

}
