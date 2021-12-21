import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRandomDeath = (url) => {
    return instance.get(url).then(response => {
        return response.data
    })
}