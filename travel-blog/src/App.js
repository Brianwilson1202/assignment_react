import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Banner bgImg={heroBackground} />
      <BlogContent myImg={headshot} />
      <Footer/>
    </div>
  );
}

export default App;
