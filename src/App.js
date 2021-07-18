import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import IntroCard from './components/IntroCard';
import Skills_and_links from './components/Skills_and_links';
import ProjectCard from './components/ProjectCard';
import { Container } from 'semantic-ui-react';
function App() {
  const [theme, setTheme] = useState('light');
  const changeTheme = (theme) => {
    console.log(theme)
    localStorage.setItem('Theme' , theme);
    setTheme(theme);
  }

  useEffect(() => {
    setTheme(localStorage.getItem('Theme'))
  }, [theme])
  return (
    <div className={theme === 'light' ? "portfolio-main" : "portfolio-main-dark"}>
      <Container style={{width: 900}}>
        <Header theme={theme}/>
        <IntroCard changeTheme={changeTheme} theme={theme}/>
        <Skills_and_links theme={theme}/>
        <ProjectCard theme={theme}/>
      </Container>
    </div>
  );
}

export default App;
