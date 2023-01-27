export type typeClients = {
    _id: string;
    email: string;
    senha: string;
    nome: string;
    createdAt: Date
}

export type typeMovies = {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    poster_path: string;
    overview: string;
    release_date?: string;
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
}