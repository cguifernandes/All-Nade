import { ObjectId } from "mongoose";

export type typeClients = {
    _id: ObjectId;
    email: string;
    nome: string;
    senha: string;
    idMovie: Array<number>;
    __v: number;
}

export type typeMovies = {
    adult?: boolean;
    backdrop_path: string;
    genre_ids?: number[];
    poster_path: string;
    overview: string;
    release_date?: string;
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    popularity?: number;
    tagline: string;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
}

export type typeGenres = {
    id: number;
    name: string;
}

export type typeCompanies = {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}