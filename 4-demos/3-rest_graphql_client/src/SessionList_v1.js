
import React,{useEffect,useState} from 'react'


const SessionList=()=>{
    const [sessions,setSessions]=useState([])
    async function  getSessions(){
        // REST api
        const rest_api="http://localhost:4000/api/v1/sessions"
        const response=await fetch(rest_api) // GET
        const sessions=await  response.json()
        setSessions(sessions)
    }
    useEffect(()=>{
      getSessions()
    },[])
    return (
        <div>
            <ul>
                {sessions.map(session=>{
                    return (
                        <li className={"list-group-item"} key={session.id}>
                            <div className={"display-3"}>{session.title}</div>
                            <div className={"display-6"}>{session.track}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export  default  SessionList;