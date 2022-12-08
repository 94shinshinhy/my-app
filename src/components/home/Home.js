import React from 'react';

const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber } = props;

  return (
    <div>
      <h1>홈페이지 : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>증가</button>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
<h1>홈페이지</h1>;
