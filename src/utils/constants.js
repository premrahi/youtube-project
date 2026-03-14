import { GOOGLE_API_KEY } from "./api";

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

export const YOUTUBE_VIDEO_DATA_API = (videoId) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_CHANNEL_API = (ID) =>
  `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${ID}&key=${GOOGLE_API_KEY}`;


export const YOUTUBE_COMMENTS_API = (videoId) =>
  `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${GOOGLE_API_KEY}`;