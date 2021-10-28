import React, {useEffect,useState} from 'react';
import {Outlet} from "react-router-dom";

//https://api.github.com/users/solankigaurav433 

function FetchHook(){
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch(`https://api.github.com/users/solankigaurav433`)
        .then((response) =>response.json()).then(setData);
    }, [])
    if (data){
    return (
        <>
        <h1>ABOUT US</h1>
        <img src={data.avatar_url} alt={data.login}/>
        <p>Name: {data.name}</p>
        <p>login: {data.login}</p>
        <p>Bio: {data.bio}</p>
        <p>location: {data.location}</p>
        <br/>
        <Outlet/>        
        </>
    )
}else {
    return <h2>No user</h2>
}

}

export default FetchHook;