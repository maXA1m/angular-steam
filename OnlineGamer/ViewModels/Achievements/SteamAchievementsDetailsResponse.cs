using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Achievements
{
    public class SteamAchievementsDetailsResponse
    {
        [JsonProperty("game")]
        public AchievementGame Game { get; set; }
    }
}
