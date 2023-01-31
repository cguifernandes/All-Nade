import { api, db } from "../../services/api";
import { Bar, Card, Container, Img, Title } from "@/styles/favoritesStyles";
import { typeMovies } from "@/types/types";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

const Favorites = ({favorites} : any) => {
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const ID_Client = parseCookies();
    const _id = ID_Client["ID_CLIENT"];
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
    var movieCard : any = [];
    var passou = true;

    useEffect(() => {
        if (passou) {
            getMovies();
            passou = false;
        }
    }, []);

    const getMovies = async () => {
        try {
            const {data} = await db.post('/favorites/getFavorites', {_id});
            for (let i = 0; i < data.data.idMovie.length; i++) {
                const Movies = await api.get(`/movie/${data.data.idMovie[i]}?api_key=${key}&language=pt-BR&region=BR`)
                movieCard.push(Movies.data);
            }
            setMovies(movieCard);
        } catch(err) {
            console.log(err);
        }
    }

    return (  
        <Bar className={favorites ? "active" : ""}>
            {
                <Container>
                    {
                        movies.map((movie, index) => {
                            return (
                                <Card key={index}>
                                    <Img>
                                        <img src={urlImg + movie.poster_path}></img>
                                    </Img>
                                    <Title>
                                        <h3>{movie.title}</h3>
                                    </Title>
                                </Card>
                            )
                        })
                    }
                </Container>
            }
        </Bar>
    );
}
 
export default Favorites;