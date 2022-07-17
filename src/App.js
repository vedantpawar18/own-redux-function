import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";


function App() {
  const state= useSelector((state)=> state);
  const dispatch= useDispatch();

  const handleAdd = () =>{
    dispatch({
      type:"INCREMENT_AMOUNT"
    })
  };

  const handleReduce = () =>{
    dispatch({
      type:"DECREMENT_AMOUNT"
    })
  };
  
  // console.log(state)
  return (
    <div className="App">
     <h1>Count:{state.count}</h1>
     <button onClick={handleAdd}>Add</button>
     <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}

export default App;
