using Newtonsoft.Json;
using System.Collections.Generic;

namespace OnlineGamer.ViewModels.Achievements
{
    public class AvailableGameStats
    {
        [JsonProperty("achievements")]
        public ICollection<AchievementDetails> Achievements { get; set; }
    }
}
