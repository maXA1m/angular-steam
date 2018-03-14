using Newtonsoft.Json;
using System.Collections.Generic;

namespace OnlineGamer.ViewModels
{
    public class AppNews
    {
        [JsonProperty("appid")]
        public int AppId { get; set; }

        [JsonProperty("newsitems")]
        public ICollection<NewsItem> NewsItems { get; set; }
    }
}