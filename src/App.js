import './App.css';
import ImageSlider from './components/ImageSlider/imageSlider';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
