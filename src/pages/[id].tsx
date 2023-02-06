import { api, db } from "@/services/api";
import Head from 'next/head';
import { Card, Img, Text, Header, Input, DropDown, DropDowns, Sliders, Container, Cards } from "@/styles/linkStyles";
import { typeCompanies, typeGenres, typeMovies } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Back from "@/components/Utils/back";
import { CaretLeft, Star } from "phosphor-react";
import RecommendedMovies from "@/components/Utils/carrousel";
import { Icon } from "@/styles/mainStyles";
import { errorAlert, successfullAlert } from "@/components/Utils/alert";
import { parseCookies } from "nookies";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";

const Link = () => {
    const { id } = useRouter().query;
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const [genres, setGenres] = useState<typeGenres[]>([]);
    const [recommendedMovies, setRecommendedMovies] = useState<typeMovies[]>([]);
    const [verifyFavorite, setVerifyFavorite] = useState(false);
    const [companies, setCompanies] = useState<typeCompanies[]>([]);
    const [activeGenres, setActiveGenres] = useState(false);
    const [activeCompanies, setActiveCompanies] = useState(false);
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
    const ID_Client = parseCookies();
    const _id = ID_Client["ID_CLIENT"];
    var movieCard : any = [];
    var genresCard : any = [];
    var production_companiesCard : any = [];
    var verify = true;

    useEffect(() => {
       if (verify) {
            (async () => {
                const {data} = await api.get(`/movie/${id}?api_key=${key}&language=pt-BR&region=BR`)
                movieCard.push(data);
                setMovies(movieCard);
                for (let i = 0; i < data.genres.length; i++) {
                    genresCard.push(data.genres[i])
                    setGenres(genresCard);
                }
                for (let i = 0; i < data.production_companies.length; i++) {
                    production_companiesCard.push(data.production_companies[i])
                    setCompanies(production_companiesCard);
                }
            })();

            
            (async () => {
                const {data} = await api.get(`/movie/${id}/recommendations?api_key=${key}&language=pt-BR`)
                setRecommendedMovies(data.results)
            })();
            
            verify = false;
        }
    }, [movies]);

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
            errorAlert('Por favor, faça login para adicionar um favorito.');
        }
    }

    useEffect(() => {
        if (ID_Client["ID_CLIENT"]) {
            setVerifyFavorite(true);
        }  
    }, [ID_Client["ID_CLIENT"]]);

    return (  
        <>
            <Head>
                <title>All Nade</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div><Toaster/></div>
            <Header>
                <Back />
                <h2 style={{letterSpacing: '4px'}}>ALL NADE</h2>
            </Header>
                <Container>
                    {
                        movies.map((movie, index) => {
                            return (
                                <Card key={index}>
                                    <Icon onClick={() => handlerClickFavorite(index)} style={{cursor: 'pointer'}}>
                                        <Star weight="fill" className="icon" />
                                    </Icon>
                                    <Img>
                                        <img src={urlImg + movie.poster_path} />
                                    </Img>
                                    <div style={{margin: '10px auto', display: 'block'}}>
                                        <Text>
                                            <h2>{movie.title}</h2>
                                            <p className="tagline">{movie.tagline}</p>
                                            <p className="overview">{movie.overview}</p>
                                        </Text>
                                        <div>
                                            <DropDowns>
                                                <Input onClick={() => setActiveGenres(!activeGenres)}>
                                                    <p>Gêneros</p>
                                                    <CaretLeft style={activeGenres ? {transform: 'rotate(-90deg)'} : {transform: 'rotate(0deg)'}} className="icon" />
                                                    {
                                                        activeGenres && 
                                                        <DropDown>
                                                            {
                                                                genres.length == 0 ?
                                                                <div className="hover">
                                                                    <p>Este filme não tem gêneros</p> 
                                                                </div>
                                                                :
                                                                genres.map((genre) => {
                                                                    return (
                                                                        <div key={genre.id} className="hover">
                                                                            <p>{genre.name}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </DropDown>
                                                    }
                                                </Input>
                                                <Input onClick={() => setActiveCompanies(!activeCompanies)}>
                                                    <p>Produção</p>
                                                    <CaretLeft style={activeCompanies ? {transform: 'rotate(-90deg)'} : {transform: 'rotate(0deg)'}} className="icon" />
                                                    {
                                                        activeCompanies && 
                                                        <DropDown>
                                                            {
                                                                companies.length == 0 ?
                                                                <div className="hover">
                                                                    <p>Este filme não tem uma empresa de produção</p>
                                                                </div>
                                                                :
                                                                companies.map((companie) => {
                                                                    return (
                                                                        <div key={companie.id} className="hover">
                                                                            <p>{companie.name}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </DropDown>
                                                    }
                                                </Input>
                                            </DropDowns>
                                            <Text style={{width: '100%', marginTop: '10px'}}>
                                                <p>Data de lançamento: <span>{movie.release_date}</span></p>
                                                <p>Popularidade: <span>{movie.popularity}</span></p>
                                                <p>Média de votos: <span>{movie.vote_average}</span></p>
                                                <p>Total de votos: <span>{movie.vote_count}</span></p>
                                                <p>Duração: <span>{movie.runtime} min</span></p>
                                            </Text>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </Container>
            <Sliders>
                <h2 style={{margin: '20px 0px', textAlign: 'center'}}>Filmes Recomendados</h2>
                {
                    recommendedMovies.length == 0 ?
                    <p style={{textAlign: 'center'}}>Sem filmes recomendados.</p>
                    :
                    <Cards>
                        <RecommendedMovies recommendedMovies={recommendedMovies} />
                    </Cards>
                }
                
            </Sliders>
            <Footer />
        </>
    );
}
 
export default Link;