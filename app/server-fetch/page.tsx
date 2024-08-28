import React from 'react'
/*Dùng fetch đi lấy dữ liệu và render dữ liệu ở phía server*/
async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.json();
    return data;
}
export default async function page() {
    const user = await getData();
  return (
    <div>tìm nạp dữ liệu server với fetch
        {user.map((item:any) => {
            return <li> {item.name}</li>
        })}
    </div>
  )
}
