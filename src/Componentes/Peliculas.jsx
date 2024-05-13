import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../Context/dataContext';
import Pelicula from './Pelicula';

const Peliculas = () => {
    const {cargando, data} = useContext(DataContext);

    return ( 
        <div className="movies-content">
            {
                !cargando ? 
                    data.map((item) => (
                        <Pelicula 
                            key={item.imdbID}
                            titulo={item.Title}
                            poster={item.Poster}
                            tipo={item.Type}
                            año={item.Year}
                            id={item.imdbID}
                            log
                        />
                    ))
                : ""
            }

        </div>
    );
}
 
export default Peliculas;