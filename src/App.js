import './App.css';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Title from './components/Title';
import samplePic from './assets/aboutPic.jpg'

import ReactIcon from './assets/reactjs.jpg'
import JSIcon from './assets/js.jpg'
import TSIcon from './assets/typescript.jpg'
import HTMLIcon from './assets/html5.jpg'
import CSSIcon from './assets/css3.jpg'
import NodeIcon from './assets/nodejs.jpg'

import CSharpIcon from './assets/cSharp.jpg'
import GitIcon from './assets/git.jpg'

function App() {
  return (
    <div className="App">
      <div className='flexbox-container homePage' id='home'>
        <Header />
        <HomeContent />
        <TechStack 
          tools={[
            {
              info: 'React',
              icon: ReactIcon
            }, 
            {
              info: 'JavaScript',
              icon: JSIcon
            }, 
            {
              info: 'TypeScript',
              icon: TSIcon
            },
            {
              info: 'HTML',
              icon: HTMLIcon
            },
            {
              info: 'CSS',
              icon: CSSIcon
            },
            {
              info: 'Node',
              icon: NodeIcon
            },
            {
              info: 'C#',
              icon: CSharpIcon
            },
            {
              info: 'Git',
              icon: GitIcon
            }
          ]}
        />
      </div>

      <div className='flexbox-container aboutPage' id='about'>

        <div id='aboutPic'>
          <img src={samplePic} alt='' width='100%' height='100%' />
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

      <div className='flexbox-container projectsPage' id='portfolio'>
        <Title text='Portfolio' />
        <h4>Check out some of my projects.</h4>

        <Portfolio />
      </div>

    </div>
  );
}

export default App;
