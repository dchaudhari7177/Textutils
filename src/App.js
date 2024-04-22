import React  from 'react'; // Import React
import Navbar from './components/Navbar';
import Textform from './Textform';

function App() {
  return (
    <>
      <Navbar title="Hello World" not = {0}/>
      <div className="container">
      <Textform head = "Enter The Text Below to Convert it to uppercase" headE = "Enter The Email Below"/>
      </div>
      
     
    </>
  );
}

export default App;
