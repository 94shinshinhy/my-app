import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

// useMemo => 메모라이제이션(기억)
function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddList = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum', sum);
    return sum;
  };

  const addResult = useMemo(() => getAddList(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('변경');
        }}
      >
        문자 변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트 값 추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;

/**
 * useMemo를 쓰지않고 getAddList를 실행하는 경우에는
 * 문자를 변경할 때에도 데이터를 다시 그림
 * useMemo를 위와같이 addResult를 실행하면
 * 문자를 변경할 때에는 getAddList 함수가 실행되지않음
 */
