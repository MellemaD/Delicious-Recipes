import { useEffect, useState } from "react";
// Allows creating functions and attach components with styling attached to it
import styled from "styled-components";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

// Splide = carousel. splideslide each individual image



function Popular() {
    const [popular, setPopular] = useState([]);
    // useEffect runs getPopular as soon as the component gets mounted/rendered
    // Empty array to tell it "only run it when the component is mounted"
    // You can add value for when app gets updated (for example everytime search gets updated)

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        // If check has a value, we turn that into an array
        // ((Local Storage only contains strings))
        if (check) {
            setPopular(JSON.parse(check)); // - parse = array
        } else {
            // If check doesn't contain a value, then we have to do API request
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9
  `);
            const data = await api.json();
            // Error message:
            //data.recipes = undefined;

            // Then we set this data to the localStorage so that we can retrieve it later instead of doing API request
            // We use stringify because localStorage can only contain strings
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    }




    return (
        <div>
            <Wrapper>
                <h3>Popular picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false, // gets rid of dots
                        drag: "free", // move around nicely
                        gap: "5rem",
                    }}
                >
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient/>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}


const Wrapper = styled.div`
margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular