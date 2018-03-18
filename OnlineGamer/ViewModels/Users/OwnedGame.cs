using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Users
{
    public class OwnedGame
    {
        [JsonProperty("appid")]
        public int AppId { get; set; }

        [JsonProperty("playtime_forever")]
        public int PlayTimeForever { get; set; }
    }
}