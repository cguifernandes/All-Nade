import { CardRecommended } from "@/styles/linkStyles";
import { Icon } from "@/styles/mainStyles";
import { typeMovies } from "@/types/types";
import Link from "next/link";
import { Star } from "phosphor-react";

const RecommendedMovies = ({recommendedMovies} : any) => {
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;

 
    return (
        recommendedMovies.map((similar : typeMovies) => {
            return (
                <CardRecommended>
                    <Link href={`${similar.id}`} key={similar.runtime}>
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

