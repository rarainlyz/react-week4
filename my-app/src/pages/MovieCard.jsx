function MovieCard({ title, year, likes, onLike }) {

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <button
        onClick={() => onLike({ title, year })}
        className="mt-3 rounded-lg bg-pink-100 px-4 py-2 text-pink-700
                   font-semibold hover:bg-pink-200 transition">
        ❤️ {likes}
      </button>
    </div>
  );
}

export default MovieCard;