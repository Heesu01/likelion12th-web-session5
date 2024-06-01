import { atom, selector } from "recoil";
import axios from "axios";

export const movieState = atom({
  key: "movieState",
  default: [],
});

export const movieListState = selector({
  key: "movieListState",
  get: async ({ get }) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR",
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
          },
        }
      );
      return response.data.results;
    } catch (error) {
      console.error("Failed to fetch movies", error);
      return [];
    }
  },
});

export const darkModeState = atom({
  key: "darkModeState",
  default: false,
});
