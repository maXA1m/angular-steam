using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.News
{
    public class SteamNewsResponse
    {
        [JsonProperty("appnews")]
        public AppNews AppNews { get; set; }
    }
}
