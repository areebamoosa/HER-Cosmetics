import React from 'react'
import { useState, useContext, createContext } from 'react'

const searchContext = createContext();

export const SearchProvider = ({ children }) => {

    const [searchItem, setSearchItem] = useState("");

    return (
        <>
            <searchContext.Provider value={{ searchItem, setSearchItem }}>
                {children}
            </searchContext.Provider>
        </>
    )
}

export const useSearch = () => useContext(searchContext)