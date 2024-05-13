import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/dataContext';

const BuscarPeliculas = () => {

    const [input, setInput] = useState("");
    const {setPelicula, error} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setPelicula(input)
    }

    return (
        <div className="form-search">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='pelicula' onChange={(e) => setInput(e.target.value)}/>
                <input type="submit" value="Buscar" />
            </form>    
        </div>
    );
}
 
export default BuscarPeliculas;