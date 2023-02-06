import { db } from "@/services/api";
import { CardRecommended } from "@/styles/linkStyles";
import { Icon } from "@/styles/mainStyles";
import { typeMovies } from "@/types/types";
import Link from "next/link";
import { parseCookies } from "nookies";
import { Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { errorAlert, successfullAlert } from "./alert";

const RecommendedMovies = ({recommendedMovies} : any) => {
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;
    const [verifyFavorite, setVerifyFavorite] = useState(false);
    const ID_Client = parseCookies();
    const _id = ID_Client["ID_CLIENT"];

    const handlerClickFavorite = async (index : any) => {
        const idMovie = (recommendedMovies[index].id)
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
        recommendedMovies.map((similar : typeMovies, index : any) => {
            return (
                <CardRecommended key={similar.runtime}>
                    <Icon onClick={() => handlerClickFavorite(index)}>
                        <Star weight="fill" className="icon" />
                    </Icon>
                    <Link href={`${similar.id}`}>
                        <h3>{similar.title}</h3>
                        <img src={urlImg + similar.poster_path}></img>
                        <p className="vote">Média de votos: <span>{similar.vote_average}</span></p>
                        {
                            similar.overview?
                            <p>{similar.overview.slice(0, 137)}...</p>
                            :
                            <p style={{color: '#ebebeb', textAlign: 'center'}}>Este filme não tem uma descrição 😓.</p>
                        }
                    </Link>
                </CardRecommended>
            )
        })
    )
}

export default RecommendedMovies

