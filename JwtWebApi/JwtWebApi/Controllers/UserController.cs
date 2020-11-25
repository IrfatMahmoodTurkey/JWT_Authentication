using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JwtWebApi.Policies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JwtWebApi.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Route("admin")]
        [Authorize(Policy = "Admin")]
        public string AdminUser()
        {
            return "Administrator";
        }

        [HttpGet]
        [Route("normal")]
        [Authorize(Policy = "User")]
        public string NormalUser()
        {
            return "User";
        }
    }
}