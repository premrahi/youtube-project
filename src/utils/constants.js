const GOOGLE_API_KEY = "AIzaSyBxQlXdD6DZ3Nt1lAzqJqpuq5wZaGAE-KI";

// videos for home page
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// search videos similar to a topic instead
export const YOUTUBE_SUGGESTIONS_API = (query) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=15&key=${GOOGLE_API_KEY}`;
