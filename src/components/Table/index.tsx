import axios, { AxiosResponse } from "axios"
import { useState } from "react"



export const Table = () => {
    const [data, setData] = useState({})
    const response =  axios('https://randomuser.me/api/')
        .then(r => setData(r.data.results))
    console.log('data', data)

    return (
        <h1>Table</h1>
    )
}