import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Footer} from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     <Footer></Footer>
    </div>
  );
}

export default App;
