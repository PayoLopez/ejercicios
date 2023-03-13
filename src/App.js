import Input from "./components/Input";
import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";

/*Si los numeros son menores o iguales a cero que nos lo vuelva a pedir */

function App() {

  const[numero1,setNumero1] = useState()
  const[numero2,setNumero2] = useState()

  const handleChange= (event) => {
    console.log(event.target.value);

   let num = event.target.value

   setNumero1(num)
 
  }


  const handleChange1= (event) => {
    console.log(event.target.value);
   
    let num = event.target.value
    
    setNumero2(num)
    
  }

  const validar = ()=>{
    let i =0
    while(i<=0){
      console.log("ingrese valores correctos")
      break;
    }

    if(numero1<numero2){
      console.log("numero1 es menor y numero2 es mayor")
      
    }
    
    else if (numero2>numero1){
     console.log("numero2 es mayor y numero1 es menor")
    };
    
  }
 
  
  return(
  <div>
    <Input type={"number"} onChange={handleChange} />
    <Input type={"number"} onChange={handleChange1} />
    <Boton onClick={validar}/>
  </div>
  );

}



export default App;
