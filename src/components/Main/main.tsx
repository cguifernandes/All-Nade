import { api } from "@/services/api";
import { Card, Container, Img, Text } from "@/styles/mainStyles";
import { typeMovies } from "@/types/typeClient";
import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingMain from "../Loading/mainLoading";

const Main = () => {
    const [movies, setMovies] = useState<typeMovies[]>();
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;

    useEffect(() => {
        api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1&region=BR`)
        .then(res => {
            setMovies(res.data.results);
        });
    });

    return (
      <Container>
        {
            movies?.length == 0 ?
            movies?.map((movie) => {
                return <LoadingMain key={movie.vote_count}></LoadingMain>;
            })
            :
            movies?.map((movie) => {
                return (
                    <>
                        <Card key={movie.id}>
                            <Img>
                                <h3>{movie.title }</h3>
                                <img src={urlImg + movie.poster_path}/>
                            </Img>
                            <Text>
                                <div className="vote">
                                    <p className="vote">{movie.vote_average}</p>
                                </div>
                                <p>{movie.overview.slice(0, 139)}...</p>
                            </Text>
                        </Card>
                    </>
                )
            })
        }
      </Container>
    );
}
 
export default Main;