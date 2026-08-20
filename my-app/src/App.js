import ProfileCard from './Component/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'คุณานนต์ บวรพิพัฒนวงศ์', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ช็อคโกแลต', 'ขนม'] },
    { id: 2, name: 'ปีสาด ร้าย', nickname: 'ปีสาด',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['นรก', 'น้ำร้อน'] },
     { id: 3, name: 'นางฟ้าฟิม', nickname: 'ตอใหย่',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ตะปู', 'ตอก'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
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