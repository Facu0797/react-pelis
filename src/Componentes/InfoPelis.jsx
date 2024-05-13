import { useParams } from "react-router-dom";
import { useFetch } from "../Hook/useFetch";
import NoImagen from "../../public/NoImage.png"


const InfoPelis = () => {

    const {id} = useParams();
    const {cargando, data, error} = useFetch(`&i=${id}`);

   if (cargando) {
        return <div className="loading"></div>
   }

   const {Poster, Title, Plot, Year, Country, Director, Runtime, Released} = data;

   let imagen = Poster === "N/A" ? NoImagen : Poster

    return ( 
        !cargando ?
            <div className="single-movie">
                <img src={imagen} alt={Title} />
                <div className="single-info">
                    <h2>{Title}</h2>
                    <p>{Plot}</p>
                    <p><strong>Country: </strong>{Country}</p>
                    <p><strong>Director: </strong>{Director}</p>
                    <p><strong>Released: </strong>{Released}</p>
                    <p><strong>Runtime: </strong>{Runtime}</p>
                    <p><strong>Year: </strong>{Year}</p>
                </div>
            </div>
        :   ""
    );
}
 
export default InfoPelis;