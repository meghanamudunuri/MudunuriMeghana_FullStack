
import './App.css';
import Header from './Header';

import Navigation from './Navigation';



const clickHandler = (e) => {
    
  e.target.innerHTML = "Done";
  console.log('Helloooooo')
}

const ClickEvent = () =>{
  const txt = document.getElementById("val").value;
  console.log(txt);

}

const ChangeEvent = (e) =>{
  console.log(e.target.value);
}
const getHeading = (data) => {
  console.log(data);
}

function App() {
  return (
  <>
  <div className="App">
    <Header />
    
     
  <Navigation />
    </div>
  </>
   
  );
}

export default App;
