using Newtonsoft.Json;

namespace OnlineGamer.ViewModels
{
    public class SteamNewsResponse
    {
        [JsonProperty("appnews")]
        public AppNews AppNews { get; set; }
    }
}
