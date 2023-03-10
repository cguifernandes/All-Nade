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
import { errorAlert, successfullAlert } from "../Utils/alert";
import { Bar, CardFavorite, ContainerFavorite, ImgFavorite, Title } from "../../styles/favoritesStyles";
import Loading from "../Loading/loading";

const Main = ({favorites, setActiveLogin} : any) => {
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const [verifyFavorite, setVerifyFavorite] = useState(false);
    const [result, setResult] = useState(false);
    const [favoritesCard, setFavoritesCard] = useState<typeMovies[]>([]);
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
    const ID_Client = parseCookies();
    const _id = ID_Client["ID_CLIENT"];
    var verify = true;
    
    const getMovies = async () => {
        var movieCard : any = [];

        if (favoritesCard != null) {
            try {
                const {data} = await db.post('/favorites/getFavorites', {_id});
                for (let i = 0; i < data.data.idMovie.length; i++) {
                    const Movies = await api.get(`/movie/${data.data.idMovie[i]}?api_key=${key}&language=pt-BR&region=BR`);
                    movieCard.push(Movies.data);
                }
                setFavoritesCard(movieCard);
                
            } catch(err) {
                
            }
        }
    }

    const handlerClickFavorite = async (index : any) => {
        const idMovie = movies[index].id;
        var favoritesCard : any = [];

        if (verifyFavorite) {
            const {data} = await db.post('/favorites/getFavorites', {_id});
            favoritesCard.push(data.data.idMovie);
            
            if (favoritesCard[0].includes(idMovie)) {
                await db.post(`/favorites/deleteFavorites`, {idMovie, _id});
                errorAlert('Favorito foi removido da sua lista.');
            }

            else {
                await db.post(`/favorites/${_id}`, {idMovie});
                successfullAlert('Favorito foi adicionado na sua lista.');
            }
        }

        else {
            errorAlert('Por favor, fa??a login para adicionar um favorito.');
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

    const handlerRemoveFavorite = async (index : any) => {
        const idMovie = favoritesCard[index].id;

        try {
            await db.post(`/favorites/deleteFavorites`, {idMovie, _id});
            errorAlert('Favorito foi removido da sua lista.');
        } catch (error) {   
            console.log(error);
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
    }, [ID_Client["ID_CLIENT"], getMovies]);

    useEffect(() => {
        api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1&region=BR`).then(({data}) => {
            setMovies(data.results)
        }).catch(error => {
            console.log(error);
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
                {
                    movies.length == 0 && !result ?
                    <Loading />
                    :
                    <Container>
                        {
                            movies?.map((movie, index) => {
                                return (
                                    <Card key={index}>
                                        <Icon onClick={() => handlerClickFavorite(index)}>
                                            <Star weight="fill" className="icon" />
                                        </Icon>
                                        <Link href={`${movie.id}`}>
                                            <Img>
                                                <h3>{movie.title}</h3>
                                                {
                                                    movie.poster_path ? 
                                                    <img src={urlImg + movie.poster_path}/>
                                                    :
                                                    <p style={{color: '#ebebeb', textAlign: 'center'}}>Este filme n??o tem uma imagem ????.</p>
                                                }
                                            </Img>
                                            <Text>
                                                <p className="vote">M??dia de votos: <span>{movie.vote_average}</span></p>
                                                {
                                                    movie.overview?
                                                    <p>{movie.overview.slice(0, 137)}...</p>
                                                    :
                                                    <p style={{color: '#ebebeb', textAlign: 'center'}}>Este filme n??o tem uma descri????o ????.</p>
                                                }
                                            </Text>
                                        </Link>
                                    </Card>
                                )   
                            })
                        }
                    </Container>
                }
                {
                    result &&
                    <div style={{height: '62.3vh'}}>
                        <p style={{color: '#ebebeb', textAlign: 'center', fontSize: '19px'}}>Desculpe, nenhum filme encontrado ????.</p>
                    </div>
                }
                <Bar className={favorites ? "active" : ""}>
                    <ContainerFavorite>
                        {
                            favoritesCard.length > 0 ?
                            favoritesCard.map((movie, index) => {
                                return (
                                    <CardFavorite key={index}>
                                        <Icon onClick={() => handlerRemoveFavorite(index)}>
                                            <Star weight="fill" className="icon" />
                                        </Icon>
                                        <Link href={`${movie.id}`} >
                                            <ImgFavorite>
                                                <img src={urlImg + movie.poster_path}></img>
                                            </ImgFavorite>
                                            <Title>
                                                <h3>{movie.title}</h3>
                                            </Title>
                                        </Link>
                                    </CardFavorite>
                                )
                            })
                            :
                            <p>Sem favoritos ????!</p>
                        }
                    </ContainerFavorite>
                </Bar>
        </>
    );
}
 
export default Main;