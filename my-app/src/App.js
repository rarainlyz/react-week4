
import ProfileCard from './Component/ProfileCard';

const members = [
  {
    id: 1,
    name: 'สมชาย ใจดี',
    nickname: 'ชาย',
    major: 'วิทยาการคอมพิวเตอร์',
    favorites: ['หนัง Sci-Fi', 'เขียนโค้ด'],
  },
  {
    id: 2,
    name: 'สมหญิง รักเรียน',
    nickname: 'หญิง',
    major: 'เทคโนโลยีสารสนเทศ',
    favorites: ['ดูหนัง', 'ฟังเพลง'],
  },
  {
    id: 3,
    name: 'มานะ ตั้งใจ',
    nickname: 'มานะ',
    major: 'วิศวกรรมซอฟต์แวร์',
    favorites: ['เกม', 'ท่องเที่ยว'],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
        สมาชิกกลุ่มของเรา
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;