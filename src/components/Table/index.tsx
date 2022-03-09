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


export const Table = () => {

    return (
        <>
            <h1>Table</h1>            
            <Grid />
        </>
    )
}