import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './pages/Home';
import MovieGallery from './pages/MovieGallery';
import About from './pages/About';
import MovieDetail from './pages/MoviesDetail';
import NotFound from './pages/Notfound';

function App() {
  const [likedMovies, setLikedMovies] = useState({});

  function handleMovieLike(movie) {
    setLikedMovies(currentLikes => ({
      ...currentLikes,
      [movie.title]: {
        ...movie,
        likes: (currentLikes[movie.title]?.likes || 0) + 1,
      },
    }));
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
      <Routes>
  <Route path="/" element={<Home likedMovies={likedMovies} />} />
  <Route path="/movies" element={<MovieGallery likedMovies={likedMovies} onMovieLike={handleMovieLike} />} />
  <Route path="/movies/:id" element={<MovieDetail />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
</Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>
  );
}

export default App;