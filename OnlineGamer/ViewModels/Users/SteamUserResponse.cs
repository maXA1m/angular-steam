using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Users
{
    public class SteamUserResponse
    {
        [JsonProperty("response")]
        public UserResponse Response { get; set; }
    }
}
