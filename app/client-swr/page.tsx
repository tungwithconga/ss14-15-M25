import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
//viết hàm đi lấy data
const getData = (url: string)=>{
    axios.get(url)
    .then(res=>{
        return res.data
    })
}
export default function page() {
    const {data,error} = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        getData
    )
    if(error) return <div>Qua trinh lay du lieu that bai</div>
    if(!data) return <div>Dang tai du lieu...</div>
    console.log("gia tri data",data)
  return (
    <div>fetching data voi thu vien swr

    </div>
  )
}
