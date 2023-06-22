import React,{useState} from "react";

const Parent = () =>{

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(){
            if(name !== "" && pass !== ""){
                setSuccess("You are logged in!");
            }
    }

    return(
        <div className="parent">
            <h1>Parent compoonent</h1>
            <label>Username:
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            </label>
            <label> Password: 
            <input type="password" onChange={(e)=> setPass(e.target.value)}/>
            </label>
            
            <button onClick={handleChange}>Login</button>
        
            {
                success&&
                <p>{success}</p>
            }
        </div>
    )
}
export default Parent;