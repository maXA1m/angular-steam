using Newtonsoft.Json;
using System.Collections.Generic;

namespace OnlineGamer.ViewModels.Users
{
    public class UserResponse
    {
        [JsonProperty("players")]
        public ICollection<Player> Players { get; set; }
    }
}