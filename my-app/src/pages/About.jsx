function About() {
  return (
    <div className="mx-auto max-w-2xl p-8 text-left">
      <h1 className="text-3xl font-bold text-slate-800">เกี่ยวกับ MovieHub</h1>
      <p className="mt-3 leading-relaxed text-slate-600">
        เว็บหนังสำหรับฝึก React State, Controlled Form และการจัดการข้อมูลแบบ interactive
      </p>

      <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
        <a
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-bold text-sky-700"
        >
          TMDB
        </a>
        <p className="text-sm text-slate-500">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </div>
  );
}

export default About;
