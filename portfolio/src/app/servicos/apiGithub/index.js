import { api } from "./api";

export const buscarTodosRepositorios = async () => {
    const resposta = await api.get();
    return resposta.data;
}