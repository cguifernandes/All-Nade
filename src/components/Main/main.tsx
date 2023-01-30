import { api, db } from "@/services/api";
import { Card, Container, Icon, Img, Text } from "@/styles/mainStyles";
import { typeMovies } from "@/types/types";
import router from "next/router";
import { parseCookies } from "nookies";
import { Star } from "phosphor-react";
import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import { errorAlert } from "../Utils/alert";

const Main = () => {
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const [verifyFavorite, setVerifyFavorite] = useState(false);
    const [id, setID] = useState<Number>();
    const [oi, setOi] = useState('');
    const [nao, setNao] = useState('');
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
    const ID_Client = parseCookies();
    const _id = ID_Client["ID_CLIENT"];

    useEffect(() => {
        api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1&region=BR`)
        .then(res => {
            setMovies(res.data.results);
        });
    }, []);

    const handlerClickFavorite = async (index : any) => {
        const idMovie = movies[index].id;
        setID(idMovie);

        if (await verifyFavorite) {
            try {
                const {data} = await db.post('/favorites/getFavorites', {_id});

            } catch (err) {
                console.log(err);
            }
        }

        else {
            errorAlert('Por favor, faça login para adicionar um favorito.')
        }
    }

    useEffect(() => {
        if (ID_Client["ID_CLIENT"]) {
            setVerifyFavorite(true);
        }
    }, [ID_Client["ID_CLIENT"]]);

    useEffect(() => {
        (async () => {
            const {data} = await db.post('/favorites/getFavorites', {_id});
            for (let i = 0; i < data.data[0].idMovie.length; i++) {
                if (data.data[0].idMovie[i] === id) {
                    setOi('tem')
                }

                else {
                    setOi('não tem')
                }
            }
        })();
    }, []);

    return (
      <Container>
        {
            movies?.map((movie, index) => {
                return (
                    <Card key={movie.id}>
                        <Icon onClick={() => handlerClickFavorite(index)}>
                            <Star weight="fill" className="icon" />
                        </Icon>
                        <Img>
                            <img src={urlImg + movie.poster_path}/>
                        </Img>
                        <Text>
                            <h3>{movie.title}</h3>
                            <p className="vote">{movie.vote_average}</p>
                            <p>{movie.overview.slice(0, 137)}...</p>
                            <p>{movie.id}</p>
                        </Text>
                    </Card>
                )
            })
        }
      </Container>
    );
}
 
export default Main;