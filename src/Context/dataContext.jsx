import React, { createContext, useState } from 'react';
import { useFetch } from '../Hook/useFetch';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [pelicula, setPelicula] = useState("superman")
    const {cargando, data, error} = useFetch(`&s=${pelicula}`);

    return (
        <DataContext.Provider value={{setPelicula, cargando, data, error}}>
            {children}
        </DataContext.Provider>
    )
}