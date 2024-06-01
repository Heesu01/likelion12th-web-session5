import React from "react";
import { useRecoilState } from "recoil";
import { styled, createGlobalStyle, ThemeProvider } from "styled-components";
import { darkModeState } from "./atoms";

const DarkMode = ({ children }) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
      {children}
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, div, input, button {
    color: ${({ theme }) => theme.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

export const lightTheme = {
  body: "#FFF",
  text: "#000",
  background: "#282c34",
  borderColor: "#ddd",
};

export const darkTheme = {
  body: "#121212",
  text: "#FFF",
  background: "#1e1e1e",
  borderColor: "#444",
};

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  color: #fff;
  margin-right: 100px;
`;

export default DarkMode;
