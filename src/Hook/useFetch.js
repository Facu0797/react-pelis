import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=93a092c2`;

export const useFetch = (parametro) => {

    const [cargando, setCargando] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchPelis = (url) => {
        setCargando(true);

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if (respuestaJson.Response === "True") {
                    setData(respuestaJson.Search || respuestaJson);
                    setError(false)
                } else {
                    setError(true)
                }
                setCargando(false)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchPelis(`${API_ENDPOINT}${parametro}`)
    }, [parametro]);

    return {cargando, data, error}
}