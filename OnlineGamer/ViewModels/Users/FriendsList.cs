using Newtonsoft.Json;
using System.Collections.Generic;

namespace OnlineGamer.ViewModels.Users
{
    public class FriendsList
    {
        [JsonProperty("friends")]
        public ICollection<Friend> Friends { get; set; }
    }
}