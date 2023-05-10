import { useState } from 'react'
import './App.css'

function App() {
  const[task1, setTask1 ] = useState ("");
  const [newtask, setNewtask] = useState([]);

  const buttonClick = () => {
      console.log("click", task1);
  
      setNewtask  ([...newtask, task1 ]);
      console.log(newtask);

      setTask1("");
      
  }

  const liste = () => {
      return newtask.map((item, index) => {
        return (
          <div key={index}>
            <ul>
              <li>{item} <button  className='buttonsupp'onClick={btnsupp}>Supprimer</button><button className='buttonmod'>modifier</button></li>
            </ul>
          </div>
        );
      });
    
  };

  // Bouton suprimer (avec filter!!!)
  const btnsupp =  () => {
    console.log("click btn supp");

  }



  const handleChange =  (e)=> { 
        setTask1(e.target.value);
     
  }


  return (
    <>
      <header id="header">
       <h1>To Do List</h1>
      </header>

      <br></br><br></br>

      <div id="container">
        <span>Ecrivez votre liste: </span>
        <br></br><br></br>

        <input  value= {task1} onChange={handleChange} type="text" placeholder="choix"></input> 
        <button onClick={buttonClick}>Valider</button>
        
          <li>{liste()} </li>
        
         
       
    

      </div>
    </>
  )
}

export default App
