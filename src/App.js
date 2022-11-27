import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  console.log('App() 실행');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '김김김' },
    { id: 2, name: '신신신' },
    { id: 3, name: '이이이' },
    { id: 4, name: '박박박' },
  ];

  // 다운로드 받음
  const [users, setUsers] = useState(sample); // 래퍼런스가 변경되어야 동작

  const download = () => {
    setUsers([...sample, { id: num, name: '최최최' }]);
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
