using HackatonSoftserve.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactJS.NetTest.Models;
using ReactJS.NetTest.Models.Controller_models;
using System;

namespace ReactJS.NetTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        ApplicationContext _appContext;

        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [Route("example")]
        [HttpGet]
        async public Task<ActionResult> RegisterUser()
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest();
            //}

            ////User? u = await _appContext.Users.Where(el => el.Login == user.Login && el.Password == user.Password).FirstOrDefaultAsync();

            //if (u != null)
            //{
            //    //return Ok(u);
            //}

            return BadRequest();
        }

        [Route("register")]
        [HttpPost]
        async public Task<ActionResult> RegisterUser(UserRegister user)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest();
            //}

            ////User? u = await _appContext.Users.Where(el => el.Login == user.Login && el.Password == user.Password).FirstOrDefaultAsync();

            //if (u != null)
            //{
            //    //return Ok(u);
            //}

            return BadRequest();
        }
    }
}
