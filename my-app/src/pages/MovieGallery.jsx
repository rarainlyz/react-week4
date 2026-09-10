import { useState } from 'react';
import { movies } from '../data';
import MovieCard from './MovieCard';

function MovieGallery({ likedMovies, onMovieLike }) {
  const [index, setIndex] = useState(0);

  const hasNext = index < movies.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);   // ไปเรื่องถัดไป
    } else {
      setIndex(0);           // สุดท้ายแล้ว วนกลับเรื่องแรก
    }
  }

  const movie = movies[index];   // ค่าที่คำนวณจาก state ไม่ต้องเป็น state เอง

  return (
    <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-md">
      <button onClick={handleNextClick}
              className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white">
        เรื่องถัดไป
      </button>

      <MovieCard
        title={movie.title}
        year={movie.year}
        likes={likedMovies[movie.title]?.likes || 0}
        onLike={onMovieLike}
      />

    </div>
  );
}

export default MovieGallery;