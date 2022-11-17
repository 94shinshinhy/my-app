import logo from './logo.svg';
import './App.css';

// 0. React 엔진 - 데이터 변경 감지해서 UI를 그려줌
// 1. 실행과정(index.html) - SPA
// 2. JSX 문법
// 3. 바벨(자바스크립트 ES5 -> ES6 변환시켜줌)

// (1) return시에 하나의 Dom만 리턴할 수 있음
// (2) 변수 선언은 let 혹은 const로만 해야함
// (3) if 사용 불가능 -> 삼항연산자 사용
// (4) 조건부 렌더링(조건 && 값 true)일 때만
// (5) css디자인
//     - 내부에 적는 방법
//     - 외부 파일에 적는 방법
//     - 라이브러리 사용

let a = 10;
const b = 20; // 상수

function App() {
  let c;
  console.log(1, c);

  const mystyle = {
    color: 'blue',
  };

  return (
    <div>
      <div style={mystyle}>div태그 {a === 10 ? 'true' : 'false'}</div>
      <h1 className="box-style">h1태그 {b === 20 && 'true'}</h1>
      <hr />
    </div>
  );
}

export default App;
