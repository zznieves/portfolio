import './App.css';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import TechStack from './components/TechStack';
import Title from './components/Title';

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

        <div id='aboutPic'>
          <p>*insert image here</p>
        </div>

        <div className='aboutText'>
          <Title  text='About Me'/>

          <p>
            As a Junior Full-Stack Developer, I possess a strong passion for technology and an<br />
            impressive arsenal encompassing both front-end and back-end development.<br />
            My skillset consists of; HTML, CSS, JavaScript, TypeScript, and React for creating dynamic<br />
            web-apps, websites, and user interfaces.<br />
            On the back-end I use; Node.js, Express.js, SQL, as well as the .NET-stack (Visual Studio, C#, SQLServer)<br />
            <br />
            I love to learn new things, build, and collaborate on projects with other developers.
          </p>
        </div>


      </div>
    </div>
  );
}

export default App;
