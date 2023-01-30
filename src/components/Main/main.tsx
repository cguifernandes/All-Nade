import { api, db } from "@/services/api";
import { Card, Container, Icon, Img, Text } from "@/styles/mainStyles";
import { Input } from "@/styles/searchStyles";
import { typeMovies } from "@/types/types";
import { parseCookies } from "nookies";
import { Star, MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'react-loading-skeleton/dist/skeleton.css'
import { errorAlert } from "../Utils/alert";

const Main = () => {
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const [verifyFavorite, setVerifyFavorite] = useState(false);
    const [result, setResult] = useState(false);
    const [id, setID] = useState<Number>();
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
    const ID_Client = parseCookies();
    const _id = ID_Client["ID_CLIENT"];

    useEffect(() => {
        
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

    const handlerSearch = (e : any) => {
        const value = e.target.value;

        if (value !== '') {
            api.get(`/search/movie?api_key=${key}&query=${value}&language=pt-BR&page=1&region=BR`)
            .then(res => {
                setMovies(res.data.results);

                if (res.data.results.length == 0) {
                    setResult(true);
                }

                else {
                    setResult(false);
                }
            })
        }

        else {
            setResult(false);
            api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1&region=BR`)
            .then(res => {
                setMovies(res.data.results);
            });
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
                }
                else {
                }
            }
        })();
    }, []);

    return (
        <>
            <Input>
                <input onChange={handlerSearch} type="text" placeholder="Pesquise por filmes..." />
                <div className="icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </Input>
            <Container>
            {
                movies?.map((movie, index) => {
                    return (
                        <Card key={movie.id}>
                            <Icon onClick={() => handlerClickFavorite(index)}>
                                <Star weight="fill" className="icon" />
                            </Icon>
                            <Img>
                                {
                                    movie.poster_path ? 
                                    <img src={urlImg + movie.poster_path}/>
                                    :
                                    <p style={{color: '#ebebeb', textAlign: 'center'}}>Este filme não tem uma imagem 😓.</p>
                                }
                                
                            </Img>
                            <Text>
                                <h3>{movie.title}</h3>
                                <p className="vote">{movie.vote_average}</p>
                                {
                                    movie.overview?
                                    <p>{movie.overview.slice(0, 137)}...</p>
                                    :
                                    <p style={{color: '#ebebeb', textAlign: 'center'}}>Este filme não tem uma descrição 😓.</p>
                                }
                            </Text>
                        </Card>
                    )
                })
            }
            </Container>
            {
                result &&
                <p style={{color: '#090909', textAlign: 'center', fontSize: '19px'}}>Nenhum resultado.</p>
            }
        </>
    );
}
 
export default Main;