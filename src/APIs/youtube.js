import axios from "axios";
const KEY = "AIzaSyCyqek36_x_FH3E0VkF2G-HW5O1k5Yn5YM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    type: "video",
    key: KEY,
  },
});
