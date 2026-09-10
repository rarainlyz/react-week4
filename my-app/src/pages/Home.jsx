function Home({ likedMovies }) {
  const likedMovieList = Object.values(likedMovies);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <section className="mx-auto mt-8 max-w-md rounded-2xl bg-white p-6 text-left shadow-md">
        <h2 className="text-xl font-bold text-slate-800">หนังที่กดใจ</h2>
        {likedMovieList.length === 0 ? (
          <p className="mt-3 text-slate-500">ยังไม่มีหนังที่กดใจ</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {likedMovieList.map(movie => (
              <li key={movie.title} className="flex justify-between text-slate-700">
                <span>{movie.title} ({movie.year})</span>
                <span>❤️ {movie.likes}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Home;