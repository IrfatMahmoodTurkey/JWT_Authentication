using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JwtWebApi.Models;
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
        private List<User> users = new List<User>
        {
            new User {  UserName = "admin", Password = "12345", UserType = "Admin" },
            new User {  UserName = "irfat", Password = "12345", UserType = "User" }
        };

        [HttpGet]
        [Route("admin")]
        [Authorize(Policy = "Admin")]
        public object AdminUser()
        {
            return users;
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