using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Achievements
{
    public class SteamAchievementsResponse
    {
        [JsonProperty("achievementpercentages")]
        public AchievementPercentages AchievementPercentages { get; set; }
    }
}
