import React from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/movie/MovieCard";
import SentimentCard from "../components/movie/SentimentCard";
import { useMovie } from "../hooks/useMovie";

const Home = () => {
  const { movieData, loading, error, getMovie } = useMovie();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        🎬 IMDb Insight Tool
      </h1>

      <SearchBar onSearch={getMovie} />

      {loading && <p className="text-center">Analyzing...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {movieData && (
        <>
          <MovieCard movie={movieData.movie} />
          <SentimentCard sentiment={movieData.sentiment} />
        </>
      )}
    </div>
  );
};

export default Home;
