//cấu hình các method (GET, POST, PUT, PATCH, DELETE);
import { NextResponse } from "next/server"
let users=[
    {
        id:1,
        name:"Nguyen Van A",
        address:"HN",
    },
    {
        id:2,
        name:"Nguyen Van B",
        address:"HCM",
    },
    {
        id:3,
        name:"Nguyen Van C",
        address:"HG",
    }
]
export async function GET(){
    return NextResponse.json(users);
}