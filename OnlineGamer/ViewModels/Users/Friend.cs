﻿using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Users
{
    public class Friend
    {
        [JsonProperty("steamid")]
        public string SteamId { get; set; }

        [JsonProperty("relationship")]
        public string Relationship { get; set; }

        [JsonProperty("friend_since")]
        public int FriendSince { get; set; }
    }
}