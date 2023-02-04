import { api } from "@/services/api";
import Head from 'next/head';
import { Card, Container, Img, Text, Header, Input, DropDown, DropDowns } from "@/styles/linkStyles";
import { typeCompanies, typeGenres, typeMovies } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Back from "@/components/Utils/back";
import { CaretLeft } from "phosphor-react";

const Link = () => {
    const { id } = useRouter().query;
    const [movies, setMovies] = useState<typeMovies[]>([]);
    const [genres, setGenres] = useState<typeGenres[]>([]);
    const [companies, setCompanies] = useState<typeCompanies[]>([]);
    const [activeGenres, setActiveGenres] = useState(false);
    const [activeCompanies, setActiveCompanies] = useState(false);
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
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
            verify = false;
        }
    }, []);

    const clickOut = () => {
        setActiveGenres(false);
        setActiveCompanies(false);
    }
    
    return (  
        <>
            <Head>
                <title>All Nade</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Header>
                <Back />
            </Header>
            <Container>
                {
                    movies.map((movie, index) => {
                        return (
                            <Card key={index}>
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
                                                <CaretLeft className="icon" />
                                                {
                                                    activeGenres && 
                                                    <DropDown>
                                                        {
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
                                                <CaretLeft className="icon" />
                                                {
                                                    activeCompanies && 
                                                    <DropDown>
                                                        {
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
                                        </Text>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                }
            </Container>
        </>
    );
}
 
export default Link;