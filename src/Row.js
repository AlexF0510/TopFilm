import { getByTitle } from "@testing-library/react";
import React from "react";
import axios from "./axios";
 import "./Row.css";

  function Row( {title, fetchUrl, islargeRow=false} ) {
    const[movies, setMovies] =useState([]);

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data. results);
            return request;
        }
       fetchData();
    }, [fetchUrl]);
   return (
   <div className="row">
    <h2>{title}</h2>
   </div>
   );
 }
   export default Row;
