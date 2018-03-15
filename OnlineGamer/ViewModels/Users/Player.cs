using Newtonsoft.Json;

namespace OnlineGamer.ViewModels.Users
{
    public class Player
    {
        [JsonProperty("steamid")]
        public string SteamId { get; set; }

        [JsonProperty("communityvisibilitystate")]
        public int CommunityVisibilityState { get; set; }

        [JsonProperty("profilestate")]
        public int ProfileState { get; set; }

        [JsonProperty("personaname")]
        public string PersonName { get; set; }

        [JsonProperty("lastlogoff")]
        public int LastLogOff { get; set; }

        [JsonProperty("profileurl")]
        public string ProfileUrl { get; set; }

        [JsonProperty("avatar")]
        public string Avatar { get; set; }

        [JsonProperty("avatarmedium")]
        public string AvatarMedium { get; set; }

        [JsonProperty("avatarfull")]
        public string AvatarFull { get; set; }

        [JsonProperty("personastate")]
        public int PersonaState { get; set; }

        [JsonProperty("realname")]
        public string RealName { get; set; }

        [JsonProperty("primaryclanid")]
        public string PrimaryClanId { get; set; }

        [JsonProperty("timecreated")]
        public int TimeCreated { get; set; }

        [JsonProperty("personastateflags")]
        public int PersonaStateFlags { get; set; }

        [JsonProperty("loccountrycode")]
        public string LocCountryCode { get; set; }

        [JsonProperty("locstatecode")]
        public string LocStateCode { get; set; }

        [JsonProperty("loccityid")]
        public int LocCityId { get; set; }

        [JsonProperty("gameextrainfo")]
        public string GameExtrainInfo { get; set; }

        [JsonProperty("gameid")]
        public string GameId { get; set; }
    }
}