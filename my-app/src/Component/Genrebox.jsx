const GENRES = ['All', 'Adventure', 'Animation', 'Action', 'Comedy', 'Science Fiction', 'Thriller'];

function GenreBox({ activeGenre, onChange }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {GENRES.map(genre => (
        <button
          key={genre}
          type="button"
          onClick={() => onChange(genre)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            activeGenre === genre
              ? 'bg-cyan-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreBox;