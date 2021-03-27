
import './App.css';
import {useState, useEffect} from "react";
import Card from './card';


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
            <input className="input"type="text" value={state} onChange={handleChange} placeholder="pincode"></input>
            <button className="button" onClick={(e)=>handleClick()}>search</button>
            <br/>
            {element ? <Searc name={element}/> : <div className="commentPlease"><br/>Please enter the pincode</div>}
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
        return (post.pincodes)==props.name;
    });
  }
  return (
      fin.length > 0 ? 
      <center><h3 className="yesDonut">Donuts are available</h3><ul className="list">{fin.map((item) => <Card 
                              institutionname={item.institutionname}
                              branchname={item.branchname}
                              address={item.address}
                              city={item.city}
                              contactnumber={item.contactnumber}
                              branchincharge={item.branchincharge}
                              pincodes={item.pincodes}
                              username={item.username}
                              password={item.password}
                              />)
          }
      </ul></center>
        : 
      <h3 className="noDonut">Bad bad luck, no donut for you!!</h3>
      )
}
