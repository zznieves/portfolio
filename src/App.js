import './App.css';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
      <div className='flexbox-container homePage'>
        <Header />
        <HomeContent />
        <TechStack 
          tools={[
            {
              info: 'React'
            }, 
            {
              info: 'JavaScript'
            }, 
            {
              info: 'TypeScript'
            },
            {
              info: 'CSS'
            }
          ]}
        />
      </div>

      <div className='flexbox-container aboutPage'>
        
      </div>
    </div>
  );
}

export default App;
