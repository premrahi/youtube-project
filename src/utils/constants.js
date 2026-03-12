export const GOOGLE_API_KEY = "AIzaSyA0XpH7X9dqgMF9tLHMG2tE8Of8Ck2nxss";

// videos for home page
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// search videos similar to title video suggestions
export const YOUTUBE_SUGGESTIONS_API = (query) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=15&key=${GOOGLE_API_KEY}`;

// search suggestion
export const YOUTUBE_SEARCH_API = (query) =>
  `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;