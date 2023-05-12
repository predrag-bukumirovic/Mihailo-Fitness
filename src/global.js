import styled from "styled-components/macro";
import "./global.css";

//Global styles
export const Container = styled.div`
  margin: 105px auto 0 auto;
  width: 1400px;
  padding: 10px 0;
  position: relative;

  @media (max-width: 1500px) {
    width: 1300px;
  }
  @media (max-width: 1330px) {
    width: 100%;
  }
  @media (max-width: 766px) {
    margin: 85px auto 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  margin: 0 auto;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px solid var(--primary);
  width: max-content;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export const Submit = styled.button`
  padding: 10px 40px;
  background: var(--primary);
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;

  :hover {
    border-color: #222222;
    color: #222222;
    background: transparent;
    transition: all 0.8s ease;
  }
`;

export const Button = styled.a`
  padding: 10px 40px;
  background: var(--primary);
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;

  :hover {
    border-color: #222222;
    color: #222222;
    background: transparent;
    transition: all 0.8s ease;
  }
  :active {
    background: var(--primary);
  }
`;

export const ButtonA = styled.a`
  padding: 10px 40px;
  background: var(--primary);
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;

  :hover {
    border-color: #222222;
    color: #222222;
    background: transparent;
    transition: all 0.8s ease;
  }
`;

export const MenuNav = styled.div`
  background: #fff;
  width: 280px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: -130%;
  z-index: 9999999;
  transition: 0.2s;
`;

// Global functions
export default function getScrollPage() {
  window.scrollTo(0, 0);
}
