import { api, db } from "@/services/api";
import { Container, Icon, Img, Text, Card } from "@/styles/mainStyles";
import { Input } from "@/styles/searchStyles";
import { typeMovies } from "@/types/types";
import Link from "next/link";
import { parseCookies } from "nookies";
import { Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'react-loading-skeleton/dist/skeleton.css'
import { errorAlert } from "../Utils/alert";
import { Bar, CardF, ContainerF, ImgF, Title } from "@/styles/favoritesStyles";
import Skeleton from "react-loading-skeleton";

const Main = ({favorites, setActiveLogin} : any) => {
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const [verifyFavorite, setVerifyFavorite] = useState(false);
    const [result, setResult] = useState(false);
    const [favoritesCard, setFavoritesCard] = useState<typeMovies[]>([]);
    const [loading, setLoading] = useState(true);
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
    const ID_Client = parseCookies();
    const _id = ID_Client["ID_CLIENT"];
    var movieCard : any = [];
    var verify = true;
    
    const getMovies = async () => {
        setLoading(true);

        try {
            const {data} = await db.post('/favorites/getFavorites', {_id});
            for (let i = 0; i < data.data.idMovie.length; i++) {
                const Movies = await api.get(`/movie/${data.data.idMovie[i]}?api_key=${key}&language=pt-BR&region=BR`);
                movieCard.push(Movies.data);
            }
            setLoading(false);
            setFavoritesCard(movieCard);
        } catch(err) {
            console.log(err);
        }
    }

    const handlerClickFavorite = async (index : any) => {
        const idMovie = movies[index].id;

        if (await verifyFavorite) {
            try {
                const {data} = await db.post('/favorites/getFavorites', {_id});
                getMovies();   

            } catch (err) {
                console.log(err);
            }
        }

        else {
            errorAlert('Por favor, faça login para adicionar um favorito.');
            setActiveLogin(true);
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

        if (verify) {
            getMovies();
            verify = false;
        }

    }, [ID_Client["ID_CLIENT"]]);

    useEffect(() => {
        api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1&region=BR`)
        .then(res => {
            setMovies(res.data.results);
        })
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
                    {movies?.map((movie, index) => {
                        return (
                            <Card>
                                <Icon onClick={() => handlerClickFavorite(index)}>
                                    <Star weight="fill" className="icon" />
                                </Icon>
                                <Link href={`${movie.id}`} key={movie.id}>
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
                                </Link>
                            </Card>
                        )
                    })}
                </Container>
                {
                    result &&
                    <p style={{color: '#090909', textAlign: 'center', fontSize: '19px'}}>Nenhum resultado.</p>
                }
                <Bar className={favorites ? "active" : ""}>
                    <ContainerF>
                        {
                            !loading ?
                            favoritesCard.map((movie, index) => {
                                return (
                                    <CardF key={index}>
                                        <ImgF>
                                            <img src={urlImg + movie.poster_path}></img>
                                        </ImgF>
                                        <Title>
                                            <h3>{movie.title}</h3>
                                        </Title>
                                    </CardF>
                                )
                            })
                            :
                            <>
                                <Skeleton style={{display: 'block', margin: '0 auto'}} height={300} width={200} />
                                <Skeleton style={{display: 'block', margin: '0 auto'}} width={200} />
                                <Skeleton style={{display: 'block', margin: '0 auto'}} height={300} width={200} />
                                <Skeleton style={{display: 'block', margin: '0 auto'}} width={200} />
                                <Skeleton style={{display: 'block', margin: '0 auto'}} height={300} width={200} />
                            </>
                        }
                    </ContainerF>
                </Bar>
        </>
    );
}
 
export default Main;