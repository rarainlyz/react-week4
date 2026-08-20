function Header() {
  return <header><h1>🎬 MovieHub</h1></header>;
}
function App() {
  return (
    <div>
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;