import './App.css';
import Hero from './Component/Hero';
import Programe from './Component/Programe/Programe';
import Whychose from './Component/WhyChose/Whychose';
import Readtostart from './Component/ReadtoStart/Readtostart';
import Scollor from './Component/TheSclorIMage/Scollor';
import TheLastFirst from './Component/TheLastFirst/TheLastFirst';
function App() {
  return (
    <div className="App">
       <Hero/> 
       <Programe/> 
       <Whychose/>
       <Readtostart/>
       <Scollor/>
       <TheLastFirst/>
    </div>
  );
}

export default App;
