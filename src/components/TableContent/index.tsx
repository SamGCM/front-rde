import { GrCircleInformation } from "react-icons/gr"
import { convertMoney } from "../../utils/convertMoney"
import { moneyType } from "../../utils/moneyType"
import { sliceName } from "../../utils/sliceName"
import { Column } from "../Column"
import { DialogModal } from "../Dialog"
import { Flex } from "../Flex"
import { Label } from "../Label"
import { Row } from "../Row"
import { Skeleton } from "../Skeleton"
import { Table } from "../Table"
import { Td } from "../Td"
import { Text } from "../Text"
import { Th } from "../Th"
import { Tooltip } from "../Tooltip"
import { Tr } from "../Tr"
import { VStack } from "../VStack"
import { ITableContent } from "./interface"
import React from "react"
import { TRegister } from "../../types/register"
import ContentDetails from "../ContentDetails"

const TableContent = ({
    columnsName,
    data,
    loadingDataAtApi
}: ITableContent): React.ReactElement => {

    return (
        <Table
            variant="striped"
            size="sm"
            margin="3"
        >
            <thead>
                <Tr>
                    {
                        columnsName.map((item, index) => (
                            <Th key={index}>
                                {item}
                            </Th>
                        ))
                    }
                </Tr>
            </thead>
            <tbody>
                
            {
                data.map((item: TRegister, index: number) => (
                    <Tr key={index} >
                        <Td>
                            <Skeleton isLoaded={loadingDataAtApi}>
                                <Tooltip
                                    content={item.NomePessoaNacional}
                                >
                                    { sliceName(item.NomePessoaNacional as string)}
                                </Tooltip>
                            </Skeleton>
                        </Td>
                        <Td>
                            <Skeleton isLoaded={loadingDataAtApi}>
                                { moneyType(item.MoedaOperacao as string) + " " + convertMoney(item.ValorOperacao?.toString() as string) }
                            </Skeleton>
                        </Td>
                        <Td>
                            <Skeleton isLoaded={loadingDataAtApi}>
                                { item.Ocorrencia }
                            </Skeleton>
                        </Td>
                        <Td>
                        <Skeleton isLoaded={loadingDataAtApi}>
                            <Tooltip
                                content={item.Modalidade}
                            >
                                { sliceName(item.Modalidade as string) }
                            </Tooltip>
                            
                            </Skeleton>
                        </Td>
                        <Td>
                            <Skeleton isLoaded={loadingDataAtApi}>
                                { item.Mes }/{ item.Ano }
                            </Skeleton>
                        </Td>
                        <Td>
                        <DialogModal
                            occurrence={item.Ocorrencia as string}
                            content={ <ContentDetails item={item} /> }
                        >
                            <GrCircleInformation
                                cursor="pointer"
                            />
                        </DialogModal>
                    </Td>
                </Tr>
                ))
            }
            </tbody>
        </Table>
    )
}

export default TableContent