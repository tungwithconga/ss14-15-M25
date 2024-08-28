import React from 'react'
import axios from 'axios'

async function getData(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("Gia tri cua res la:",res);
    return res.data
}

export default async function page() {
    const users = await getData()
    
  return (
    <div>page
        {users.map((item:any) => {
            return <li>{item.name}</li>
        })}
    </div>
  )
}
