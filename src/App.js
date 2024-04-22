import React  from 'react'; // Import React
import Navbar from './components/Navbar';
import Textform from './Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utils" not = {0}/>
      <div className="container">
      <Textform head = "Enter The Text to analyze" headE = "Enter The Email Below"/>
      </div>
      
     
    </>
  );
}

export default App;
