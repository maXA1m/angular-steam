using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OnlineGamer.ViewModels;

namespace OnlineGamer.Controllers.Api
{
    [Produces("application/json")]
    public class NewsController : Controller
    {
        const string API_KEY = "B6143603063836FCAAB0485A9EE05012";
        const string API_URI = "https://api.steampowered.com";

        [Route("api/news/{gameId}")]
        public async Task<IActionResult> GetNews(int gameId)
        {
            using (HttpClient steam = new HttpClient())
            {
                try
                {
                    steam.BaseAddress = new Uri(API_URI);
                    var response = await steam.GetAsync($"/ISteamNews/GetNewsForApp/v0002/?appid={gameId}&count=100&key={API_KEY}");
                    response.EnsureSuccessStatusCode();

                    string result = await response.Content.ReadAsStringAsync();
                    var json = JsonConvert.DeserializeObject<SteamNewsResponse>(result);

                    return Ok(json);
                }
                catch(HttpRequestException ex)
                {
                    return BadRequest($"Error getting news for app {gameId}: {ex.Message}");
                }
            }
        }
    }
}