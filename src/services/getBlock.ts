import { api } from "./api"
import { TRegister } from "../types/register"
import {AxiosError} from "axios"

export const getBlock = async <T>(
    block: string, 
    params: TRegister
): Promise<{
    block: T,
    isError: boolean,
    isLoading: boolean,
}> => {
    let error = false;
    let resultData: T;

    const { Mes, Ano, ...restParams} = params

    try {
        const { data } = await api.get(`RegistrosPorMes(Mes=@Mes,Ano=@Ano)?@Mes=${Mes}&@Ano=${Ano}&$top=3&$format=json`, {
            params: {
                ...restParams
            }
        })
        
        resultData = data
    } catch (err: any) {
        error = true
        resultData = err.response?.data
    }


    return {
        block: resultData,
        isError: error,
        isLoading: resultData && error,
    }
}