import { api } from "@/services/api";
import { Container } from "@/styles/mainStyles";
import { typeMovies } from "@/types/typeClient";
import { useEffect, useState } from "react";

const Main = () => {
    const [movies, setMovies] = useState<typeMovies[]>();
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;

    useEffect(() => {
        api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1&region=BR`)
        .then(({data}) => {
            setMovies(data.results);
        })
    });

    return (
      <Container>
        {
            movies?.map((movie) => {
                return (
                    <>
                        <p>{movie.title}</p>
                        <img src={movie.poster_path ? urlImg + movie.poster_path : movie.poster_path}></img>
                    </>
                )
            })
        }
      </Container>
    );
}
 
export default Main;