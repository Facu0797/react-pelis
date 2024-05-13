import React from 'react';
import NoImagen from "../../public/NoImage.png"
import { Link } from 'react-router-dom';

const Pelicula = ({titulo, poster, id, año, tipo}) => {

    let imagen = poster === "N/A" ? NoImagen : poster

    return ( 
        <Link to={`/peliculas/${id}`} style={{color: 'inherit', textDecoration: "none"}}>
            <article>
                <div className="item-movie" style={{backgroundImage: `url(${imagen})`}}>
                    <div className="info">
                        <h4>{titulo}</h4>
                        <p className='row-info'> <span>{tipo}</span> <span>{año}</span></p>
                    </div>
                </div>
            </article>
        </Link>
        
    );
}
 
export default Pelicula;