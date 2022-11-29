import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 통신을 통해 다운로드
    let downloadData = 5;
    setData(downloadData);
  };

  // 실행시점
  // (1) App() 함수가 최초 실행될 때(App() 최초 그려질 때)
  // (2) 상태 변수가 변경될 때(dependencyList에 등록되어있어야함)
  // (3) 의존 리스트를 관리할 수 있음
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]); // search에 의존하기때문에 search가 변경되면 실행됨

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
