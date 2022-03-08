import axios from "axios"
import { useEffect, useState } from "react"
import { Grid } from "../Grid"

export type UserData = {
    cell: string,
    dob: {
        age: number,
        date: string,
    },
    email: string,
    gender: string,
    id: {
        name: string,
        value: string,
    },
    name: {
        first: string,
        last: string,
        title: string,
    }
    nat: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    }
}


const baseUrl = 'https://randomuser.me/api/?results=50&exc=login,phone,registered'

export const Table = () => {
    const [data, setData] = useState<UserData[]>([])

    useEffect(() => {
        axios.get(baseUrl)
            .then(r => setData(data => data.concat(r.data.results)))
    }, [])



    console.log('data', data)


    return (
        <>
            <h1>Table</h1>
            <h1>{data.length}</h1>
            {/* {data.map(r => <h1>{r.id.name}</h1>)} */}
            <Grid data={data} />
        </>
    )
}