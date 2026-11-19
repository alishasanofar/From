import { useState } from "react";
import './App.css';
// function App(){
//   const [count,setCount] = useState(10);
//   return(
//     <div className="click">
//     <div>
//       <button>Count</button><br></br>
//       <button onClick={()=> setCount(count+1)}>+</button><br></br>
//       <button onClick={()=> setCount(count-1)}>-</button><br></br>
//       <button onClick={()=> setCount(0)}>Reset</button><br></br>
//       <p>useState:{count}</p>
//     </div>
//    </div>

//   );
// }
// export default App;

function MyForm(){
  const [formData,setformData]=useState({
    name:"",
    department:"",
    age:""});
  function handleChange(e){
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Name: " + formData.name +
    "\nDepartment: " + formData.department +
    "\nAge: " + formData.age
  );
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        />  
      </label><br></br>
      <label>Enter Department:
        <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
         />
      </label><br></br>
      <label>Enter age:
        <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
         />
      </label><br></br>
     <input type="submit" />
    </form>
  );
}
export default MyForm;