
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  
} from "react-router-dom";*/


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "Success");
      document.title='TextUtils - Dark Mode';

      /*setInterval(() => {
        document.title='TextUtils is amazing mode.'
      }, 2000);

      setInterval(() => {
        document.title='Install TextUtils now.'
      }, 1500);*/

    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>

    {/*<Router>*/}
    <Navbar title="TextUtils" /*aboutText="About TextUtils"*/ mode={mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>
    
    <div className='container my-3'>

    {/*<div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
    </div>*/}

     <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
     {/*<About/>*/}
    </div>
    {/*</Router>*/}
    
    </>
  );
}

export default App;
