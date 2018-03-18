using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Users
{
    public class SteamUserGamesResponse
    {
        [JsonProperty("response")]
        public Response Response { get; set; }
    }
}
