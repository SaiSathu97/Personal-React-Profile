import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Calculator from "react-calculator";
import styled from "styled-components";

// Styled components for modern design
const Container = styled.div`
  font-family: "Arial", sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const NavLink = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: #f1c40f;
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

const Heading = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin-top: 80px;
`;

const SubHeading = styled.p`
  font-size: 1.5em;
  margin-top: 10px;
  font-style: italic;
`;

const CalculatorWrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

function App() {
  // Animation for the main heading
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  return (
    <Container>
      {/* Navigation Bar */}
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>

      {/* Profile Section */}
      <ProfilePic src="https://via.placeholder.com/150" alt="Profile" />
      <animated.div style={fadeIn}>
        <Heading>Hello, Welcome to My Portfolio 🚀</Heading>
      </animated.div>
      <SubHeading>I'm a React Developer</SubHeading>

      {/* Calculator */}
      <CalculatorWrapper>
        <Calculator />
      </CalculatorWrapper>
    </Container>
  );
}

export default App;
