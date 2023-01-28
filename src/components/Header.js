import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)
// styled-components => js파일과 css파일 관리

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

// styled가 가지고 있지 않은 속성은 상속을 해서 사용
const StyledHeadLink = styled(Link)`
  color: black;
`;

const Header = () => {
  return (
    <>
      <StyledHeaderDiv backgroundColor={'blue'}>
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaderDiv>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                홈
              </Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default Header;
