using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

using OnlineGamer.ViewModels.Achievements;

namespace OnlineGamer.Controllers.Api
{
    [Produces("application/json")]
    public class AchievementsController : Controller
    {
        const string API_KEY = "B6143603063836FCAAB0485A9EE05012";
        const string API_URI = "https://api.steampowered.com";

        [Route("api/achievements/{gameId}")]
        public async Task<IActionResult> GetAchievements(int gameId)
        {
            using (HttpClient steam = new HttpClient())
            {
                try
                {
                    steam.BaseAddress = new Uri(API_URI);
                    var response = await steam.GetAsync($"/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid={gameId}");
                    response.EnsureSuccessStatusCode();

                    string result = await response.Content.ReadAsStringAsync();
                    var json = JsonConvert.DeserializeObject<SteamAchievementsResponse>(result);

                    return Ok(json);
                }
                catch (HttpRequestException ex)
                {
                    return BadRequest($"Error getting news for app {gameId}: {ex.Message}");
                }
            }
        }
    }
}