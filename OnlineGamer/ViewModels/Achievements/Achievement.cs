using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Achievements
{
    public class Achievement
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("percent")]
        public double Percent { get; set; }
    }
}
