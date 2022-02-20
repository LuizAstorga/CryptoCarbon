import axios from "axios";

const KEY = "AIzaSyA9WUd6PhmQSJ1mEMOlEqumzoc8H5mMQRg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
