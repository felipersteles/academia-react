
import './App.css';
import Hero from './components/Hero/Hero';
import Programas from './components/Programas/Programas';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programas />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;