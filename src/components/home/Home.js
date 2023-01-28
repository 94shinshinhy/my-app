import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledUserDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'shin' ? 'blue' : 'red')};
`;

const StyledAddButton = styled(StyledUserDeleteButton)`
  background-color: green;
`;

const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <h1>홈페이지 : {number}</h1>
      <StyledAddButton user={user} onClick={() => setNumber(number + 1)}>
        증가
      </StyledAddButton>
      <StyledUserDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledUserDeleteButton>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
