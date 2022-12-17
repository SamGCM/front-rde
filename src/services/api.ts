import axios from "axios";

export const api = axios.create({
    baseURL: "https://olinda.bcb.gov.br/olinda/servico/RDE_Publicacao/versao/v1/odata",    
})