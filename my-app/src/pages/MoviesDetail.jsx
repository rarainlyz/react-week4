import { useParams, Link } from 'react-router-dom';
import { movies } from '../data';
import ReviewForm from '../Component/ReviewForm';

function MoviesDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <p className="p-8 text-center text-slate-500">ไม่พบหนังเรื่องนี้ 😢</p>;
  }

  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8">
      <div className="flex flex-col gap-8 rounded-3xl bg-white p-6 shadow-md md:flex-row md:p-8">
        {movie.poster && (
          <img src={movie.poster} alt={`โปสเตอร์ ${movie.title}`} className="w-full rounded-2xl object-cover shadow-md md:w-56" />
        )}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">{movie.title}</h1>
          {movie.titleTh && <p className="mt-2 text-lg text-slate-600">{movie.titleTh}</p>}
          <p className="mt-1 text-slate-500">ปี {movie.year} · {movie.genre} · ⭐ {movie.rating}</p>
          <p className="mt-4 leading-relaxed text-slate-700">{movie.detail}</p>
        </div>
      </div>

      <ReviewForm movieTitle={movie.title} />

      <Link to="/movies"
            className="mt-6 inline-block rounded-lg bg-cyan-600 px-4 py-2
                       font-semibold text-white hover:bg-cyan-700 transition">
        ← กลับไปหน้าหนังทั้งหมด
      </Link>
    </div>
  );
}

export default MoviesDetail;