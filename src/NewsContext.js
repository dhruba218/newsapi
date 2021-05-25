import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "ec0144f40d334dff9ae35928d0afe227";

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=tesla&from=2021-04-24&sortBy=publishedAt&apiKey=${apiKey}`
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
        
    }, []);




    return(


        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>


    );





    











};
