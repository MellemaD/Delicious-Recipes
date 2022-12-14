import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import{Link, useParams} from "react-router-dom"
// useParams = pull out keyword from url

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        console.log(name);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() =>{
        getCuisine(params.type);
        console.log(params.type);
    },[params.type]);

    // Inside useEffect you call getCuisine and pass the cuisine for complex search
    // Through useparams we can get the keyword from the top bar (url)

    // Then we need to say when params changes, run useEffect again. Hence:
    // Added params.type

    return(
        <Grid>
            {cuisine.map((item) =>{
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;