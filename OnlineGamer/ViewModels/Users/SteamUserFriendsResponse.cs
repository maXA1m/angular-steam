using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Users
{
    public class SteamUserFriendsResponse
    {
        [JsonProperty("friendslist")]
        public FriendsList FriendsList { get; set; }
    }
}
