import { getBlock } from "../services/getBlock"
import { TRegister } from "../types/register"

type TResult = {
    "@odata.context": string,
    value: TRegister[]

}

export const filterData = async (
    params: TRegister
):Promise<{
    block: TResult,
    isError: boolean,
    isLoading: boolean
}> => {


    const {block, isError, isLoading} = await getBlock<TResult>("", {
        ...params
    })

    return {
        block: block,
        isError: isError,
        isLoading: isLoading
    }
}