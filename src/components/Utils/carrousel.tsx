import Link from "next/link";

const SimilarMovie = ({similarMovies} : any) => {
    const urlImg = process.env.NEXT_PUBLIC_API_IMG;

        return (
            similarMovies.map((similar : any) => {
                return (
                    <Link href={`${similar.id}`} key={similar.runtime}>
                        <h3>{similar.title}</h3>
                        <img src={urlImg + similar.poster_path}></img>
                        <p>{similar.overview.slice(0, 137)}...</p>
                    </Link>
                )
            })
        )
}

export default SimilarMovie

