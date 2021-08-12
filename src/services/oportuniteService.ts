import { Api } from "../providers";
import { Oportunite } from "../interfaces";

const getAll = () => Api.get<Oportunite[]>('/oportunites');

export const oportuniteService = {
    getAll,
}