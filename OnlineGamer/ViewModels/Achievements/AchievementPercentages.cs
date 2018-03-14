using Newtonsoft.Json;
using System.Collections.Generic;

namespace OnlineGamer.ViewModels.Achievements
{
    public class AchievementPercentages
    {
        [JsonProperty("achievements")]
        public ICollection<Achievement> Achievements { get; set; }
    }
}