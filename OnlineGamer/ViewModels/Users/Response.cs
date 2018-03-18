using Newtonsoft.Json;
using System.Collections.Generic;

namespace OnlineGamer.ViewModels.Users
{
    public class Response
    {
        [JsonProperty("game_count")]
        public int GameCount { get; set; }

        [JsonProperty("games")]
        public ICollection<OwnedGame> Games { get; set; }
    }
}