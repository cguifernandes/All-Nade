import { api } from "@/services/api";
import { Card, Container, Img, Text } from "@/styles/mainStyles";
import { typeMovies } from "@/types/typeClient";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Star } from "phosphor-react";
import 'react-loading-skeleton/dist/skeleton.css'

const Main = () => {
    const [movies, setMovies] = useState<typeMovies[]>();
    const [isLoading, setIsLoading] = useState(false);
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;

    useEffect(() => {
        api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1&region=BR`).then(({data}) => {
            setMovies(data.results);
            if (data.results.length > 0) {
                setIsLoading(true);
            }

            else {
                setIsLoading(false);
            }
        });
    });

    return (
      <Container>
        {
            movies?.map((movie) => {
                return (
                    <>
                        <Card key={movie.id}>
                            <Img>
                                <h3>{isLoading ? movie.title : <Skeleton />}</h3>
                                {isLoading ? <img src={urlImg + movie.poster_path} /> : <Skeleton height="400px"/>}
                            </Img>
                            <Text>
                                <div className="vote">
                                    {isLoading ? <p className="vote">{movie.vote_average}</p> : <Skeleton />}
                                </div>
                                <p>{isLoading ? movie.overview.slice(0, 139) : <Skeleton height="100px"/>}...</p>
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