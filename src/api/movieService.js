import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchMovieData = async (imdbId) => {
  const res = await axios.post(API, { imdbId });
  return res.data;
};
