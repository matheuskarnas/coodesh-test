import axios, { AxiosResponse } from "axios"
import { useState } from "react"

const baseUrl = 'https://randomuser.me/api/'

export const Table = () => {
    const [data, setData] = useState<object[]>([])

    const axiosGet = () => {
        axios.get(baseUrl)
            .then(r => setData([...data, r.data.results[0]]))
    }

    axiosGet()
    console.log('data',data)


    return (
        <>
        <h1>Table</h1>
        {data.map(p => <h1>{p.name.first}</h1>)}
        </>
    )
}