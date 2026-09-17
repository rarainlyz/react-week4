import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data';
import SearchBox from '../Component/Searchbox';
import GenreBox from '../Component/Genrebox';
import ReviewForm from '../Component/ReviewForm';

function MovieGrid({ movies: shownMovies, likedMovies, onMovieLike }) {
  if (shownMovies.length === 0) {
    return <p className="mt-8 text-center text-slate-400">ไม่พบหนังที่ค้นหา 🔍</p>;
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {shownMovies.map(movie => (
        <article key={movie.id} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <Link to={`/movies/${movie.id}`}>
            {movie.poster ? (
              <img src={movie.poster} alt={`โปสเตอร์ ${movie.title}`} className="aspect-[2/3] w-full object-cover" />
            ) : (
              <div className="flex aspect-[2/3] items-center justify-center bg-slate-200 text-4xl">🎬</div>
            )}
            <div className="p-4 pb-2">
              <h3 className="text-lg font-bold text-slate-800">{movie.title}</h3>
              {movie.titleTh && <p className="text-sm text-slate-600">{movie.titleTh}</p>}
              <p className="mt-1 text-sm text-slate-500">ปี {movie.year} · {movie.genre} · ⭐ {movie.rating}</p>
            </div>
          </Link>
          <div className="px-4 pb-4">
            <button
              type="button"
              onClick={() => onMovieLike(movie)}
              aria-pressed={Boolean(likedMovies[movie.id])}
              className={`w-full rounded-lg px-4 py-2 font-semibold transition ${
                likedMovies[movie.id]
                  ? 'bg-pink-500 text-white hover:bg-pink-600'
                  : 'bg-slate-100 text-slate-500 hover:bg-pink-100 hover:text-pink-600'
              }`}
            >
              {likedMovies[movie.id] ? '♥ ถูกใจแล้ว' : '♡ ถูกใจ'}
            </button>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <ReviewForm movieTitle={movie.title} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function Movies({ likedMovies, onMovieLike }) {
  const [query, setQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');

  const shownMovies = movies.filter(movie => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = activeGenre === 'All' || movie.genre === activeGenre;
    return matchesQuery && matchesGenre;
  });

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>
      <SearchBox query={query} onQueryChange={setQuery} />
      <GenreBox activeGenre={activeGenre} onChange={setActiveGenre} />
      <MovieGrid movies={shownMovies} likedMovies={likedMovies} onMovieLike={onMovieLike} />
    </div>
  );
}

export default Movies;