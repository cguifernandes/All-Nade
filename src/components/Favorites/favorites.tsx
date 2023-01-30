import { api, db } from "../../services/api";
import { Bar, Card, Container, Img, Title } from "@/styles/favoritesStyles";
import { typeMovies } from "@/types/types";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

const Favorites = ({favorites} : any) => {
    const [movieID, setMovieID] = useState([]);
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const ID_Client = parseCookies();
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;

    useEffect(() => {
        var MoviesCard : any = [];
        var MovieIDCard : any = [];

        (async () => {
            try {
                const _id = ID_Client["ID_CLIENT"]
                const {data} = await db.post('/favorites/getFavorites', {_id});
                
            } catch(err) {
                console.log(err);
            }
        })(); 

        for (let i = 0; i < movieID.length; i++) {
            api.get(`/movie/${movieID[i]}?api_key=${key}&language=pt-BR&region=BR`).then(res => {
                MoviesCard.push(res.data)
                setMovies(MoviesCard)
            });
        }

    }, []);

    return (  
        <Bar className={favorites ? "active" : ""}>
            {
                movieID == null ?
                <Container>
                    <p>Sem nenhum favorito aqui.</p>
                </Container>
                :
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