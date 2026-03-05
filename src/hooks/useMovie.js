import { useState } from "react";
import { fetchMovieData } from "../api/movieService";

export const useMovie = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getMovie = async (imdbId) => {
    if (!imdbId.startsWith("tt")) {
      return setError("Invalid IMDb ID format.");
    }

    try {
      setLoading(true);
      setError("");
      const data = await fetchMovieData(imdbId);
      setMovieData(data);
    } catch (err) {
      setError("Movie not found.");
    } finally {
      setLoading(false);
    }
  };

  return { movieData, loading, error, getMovie };
};
