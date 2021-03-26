
import './App.css';
import {useState, useEffect} from "react";


export default function App(props){

    const [state, setState] = useState("");
    const [element, setElement] = useState("");

    function handleChange(e){
        setState(e.target.value);
    }

    const handleClick=()=>{
        if(state){
            setElement(state)
        }setState();
    };console.log(element)

    return(
        <div className="App">
            <input className="input"type="text" value={state} onChange={handleChange} placeholder="type pincode here.."></input>
            <button className="button" onClick={(e)=>handleClick()}>search</button>
            <br/><br/>
            {element ? <Searc name={element}/> : <div></div>}
        </div>
    )
  }




const Searc = ({name})=>{  

  const [posts, setPosts] = useState([
    {
      institutionname:"",
      branchname:"",
      address:"",
      city:"",
      contactnumber:"",
      branchincharge:"",
      pincodes:0,
      username:"",
      password:""
    }
  ])

  useEffect(() => {
    fetch("/nuts").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setPosts(jsonRes))
  },[]);


  var ans = "Bad bad luck, no donut for you!!";
  if(posts.length===48){
    ans = "Donuts available at "
    var fin = posts.filter(post => {
        return (post.pincodes)===700007;
    });
    for (let i=0; i<fin.length;i++){
      ans += fin[i].branchname + ",  "
    } 
    ans += "!"
  }
  console.log("fin is", fin)
  return <div className="branches">{ans}</div>
}
