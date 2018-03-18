using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

using OnlineGamer.ViewModels.Users;

namespace OnlineGamer.Controllers.Api
{
    [Produces("application/json")]
    public class UsersController : Controller
    {
        const string API_KEY = "B6143603063836FCAAB0485A9EE05012";
        const string API_URI = "https://api.steampowered.com";

        [Route("api/users/{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            using (HttpClient steam = new HttpClient())
            {
                try
                {
                    steam.BaseAddress = new Uri(API_URI);
                    var response = await steam.GetAsync($"/ISteamUser/GetPlayerSummaries/v0002/?key={API_KEY}&steamids={id}");
                    response.EnsureSuccessStatusCode();

                    string result = await response.Content.ReadAsStringAsync();
                    var json = JsonConvert.DeserializeObject<SteamUserResponse>(result);

                    return Ok(json);
                }
                catch (HttpRequestException ex)
                {
                    return BadRequest($"Error getting user {id}: {ex.Message}");
                }
            }
        }

        [Route("api/users/friends/{id}")]
        public async Task<IActionResult> GetUserFriends(string id)
        {
            using (HttpClient steam = new HttpClient())
            {
                try
                {
                    steam.BaseAddress = new Uri(API_URI);
                    var response = await steam.GetAsync($"ISteamUser/GetFriendList/v0001/?key={API_KEY}&steamid={id}&relationship=friend");
                    response.EnsureSuccessStatusCode();

                    string result = await response.Content.ReadAsStringAsync();
                    var json = JsonConvert.DeserializeObject<SteamUserFriendsResponse>(result);

                    return Ok(json);
                }
                catch (HttpRequestException ex)
                {
                    return BadRequest($"Error getting user {id}: {ex.Message}");
                }
            }
        }

        [Route("api/users/games/{id}")]
        public async Task<IActionResult> GetUserGames(string id)
        {
            using (HttpClient steam = new HttpClient())
            {
                try
                {
                    steam.BaseAddress = new Uri(API_URI);
                    var response = await steam.GetAsync($"IPlayerService/GetOwnedGames/v0001/?key={API_KEY}&steamid={id}");
                    response.EnsureSuccessStatusCode();

                    string result = await response.Content.ReadAsStringAsync();
                    var json = JsonConvert.DeserializeObject<SteamUserGamesResponse>(result);

                    return Ok(json);
                }
                catch (HttpRequestException ex)
                {
                    return BadRequest($"Error getting user {id}: {ex.Message}");
                }
            }
        }
    }
}