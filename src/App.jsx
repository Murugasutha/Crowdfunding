import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Campagins from './components/Campaigns';
import Title from './components/Title';
import About from './components/About';
import FeaturedCampaigns from './components/FeaturedCampaigns';
import Testimonials from './components/Testimonials';

function App() {
  const [count, setCount] = useState(0);

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  }, [theme])
  
  console.log("Rending App");

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero theme={theme} />
        <Title title="Join the movement and make a Difference" subtitle="Trending Campagins" theme={theme} />
        <Campagins theme={theme}/>
        <About/>
        <Title title="Discover campaigns that inspire you" subtitle="Featured Campagins" theme={theme} />
        <FeaturedCampaigns/>
        <Title title="What our Users says" subtitle="testimonial" theme={theme}/>
        <Testimonials/>
      </div>
    </>
  );
}

export default App;
