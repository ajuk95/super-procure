import React,{useState, useEffect} from "react";
import App from "./App";
// import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(){

    const [okLog, setOkLog] = useState(false);
    // setOkLog(true);

    const [state1, setState1] = useState();
    const [element1, setElement1] = useState();

    const [state2, setState2] = useState();
    const [element2, setElement2] = useState();

    function handleChange1(e){
        setState1(e.target.value);
    }
    function handleChange2(e){
        setState2(e.target.value);
    }

    const handleClick=()=>{
        if(state1){
            setElement1(state1)
        }setState1();
        if(state2){
            setElement2(state2)
        }setState2();
        
    };

    return (
        okLog ? 
    <App/>
    :
    <div className="login">
        <h1>DONUTS MARKET</h1>
        <input className="username"type="text" value={state1} onChange={handleChange1} placeholder="Username"></input>
        <br/><br/>
        <input className="password"type="text" value={state2} onChange={handleChange2} placeholder="Password"></input>
        <br/><br/>
        <button className="logbutton" onClick={(e)=>handleClick()}>Login</button>
        {(element1 && element2) ? <Searc name1={element1} name2={element2}/> : <div className="commentPlease"><br/>Please login</div>}
    </div>
    )
}





const Searc = (props)=>{  

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
  
  
    if(posts){
      var fin = posts.filter(post => {
          return ((post.username)==props.name1 && (post.password)==props.name2);
      });
    }
    return(
        fin.length>0 ?
        <div>
                <App/>

        </div>
        :
        <div className="commentFail"><br/>
            Login failed
        </div>
    )
}

