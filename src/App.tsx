import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Table, UserData } from "./components/Table";

const baseUrl = 'https://randomuser.me/api/?results=50&exc=login,phone,registered'

export const UsersContext = createContext<UserData[]>([])
export const App = () => {
    const [data, setData] = useState<UserData[]>([])


    useEffect(() => {
        axios.get(baseUrl)
            .then(r => r.data.results.map(user => {
                if (user.id.value !== null && user.id.name !== undefined) {
                    setData(data => data.concat(user))
                }
            }))
    }, [])

    return (
        <UsersContext.Provider value={data}>
            <Header />
            <Table />
        </UsersContext.Provider>
    )
}


