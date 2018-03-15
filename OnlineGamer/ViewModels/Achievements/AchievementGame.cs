using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Achievements
{
    public class AchievementGame
    {
        [JsonProperty("gameName")]
        public string GameName { get; set; }

        [JsonProperty("gameVersion")]
        public string GameVersion { get; set; }

        [JsonProperty("availableGameStats")]
        public AvailableGameStats AvailableGameStats { get; set; }
    }
}
