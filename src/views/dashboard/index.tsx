import React, { useState } from "react"
import { useQuery } from "react-query"
import { filterData } from "../../hooks/filterData"
import { TRegister } from "../../types/register"
import { Card } from "../../components/card"
import { convertMoney } from "../../utils/convertMoney"
import { Heading } from "../../components/Heading"
import { Text } from "../../components/Text"
import { ContainerTable } from "../../components/ContainerTable"
import { Skeleton } from "../../components/Skeleton"
import { Flex } from "../../components/Flex"
import { HStack } from "../../components/HStack"
import { BsGraphUp, BsGraphDown } from "react-icons/bs"
import {AiFillDollarCircle} from "react-icons/ai"
import TableContent from "../../components/TableContent"
import Layout from "../../components/Layout"
import { GroupCards } from "../../components/GroupCards"
import { Input } from "../../components/Input"
import { Box } from "../../components/Box"

const Dashboard = (): React.ReactElement => {

    const [dataTable, setDataTable] = useState<Array<TRegister>>([])
    const [isLoadingDataAtApi, setIsLoadingDataAtApi] = useState(true);
    const [totalCard, setTotalCard] = useState(0);
    const [successCard, setSuccessCard] = useState(0);
    const [failCard, setFailCard] = useState(0);
    const iconSize = 30;

    useQuery("getData", async () => {
        const {block, isError, isLoading} = await filterData({Ano: 2022, Mes: 1})
        
        setDataTable(block.value)
        let fails = 0
        let success = 0
        let total = 0

        block.value.forEach((item) => {
            if(item.Ocorrencia?.includes("CANCELADO")) {
                fails += 1
            }
            
            if(item.Ocorrencia?.includes("CONCLUÍDO")) {
                success += 1
            }
            
            total += item.ValorOperacao as number
        })

        setFailCard(fails)
        setSuccessCard(success)
        setTotalCard(total)

        setIsLoadingDataAtApi(isLoading)
    })

    const columnsData = [
        "Nome Nacional", 
        "Valor",
        "Ocorrência",
        "Modalidade",
        "Data",
        "",
    ]

    return (
        <Layout
            title="Dados"
        >
            <GroupCards>
                    <Card
                    >
                        <HStack
                            align="center"
                            spacing="4"
                        >
                            <AiFillDollarCircle size={iconSize} color="orange"/>
                            <Flex
                                direction="column"
                            >
                                <Skeleton isLoaded={isLoadingDataAtApi}>
                                    <Heading>{"R$ " + convertMoney(totalCard.toString()) } </Heading>
                                </Skeleton>
                                <Text>Total</Text>
                            </Flex>
                        </HStack>
                    </Card>
                    <Card
                    >
                        <HStack
                            align="center"
                            spacing="4"
                        >
                            <BsGraphUp size={iconSize} color="green"/>
                            <Flex
                                direction="column"
                            >
                                <Heading>{ successCard }</Heading>
                                <Text>Sucedidos</Text>
                            </Flex>
                        </HStack>
                    </Card>
                    <Card
                    >
                        <HStack
                            align="center"
                            spacing="4"
                        >
                            <BsGraphDown size={iconSize} color="red"/>
                            <Flex
                                direction="column"
                            >
                                <Heading>{ failCard }</Heading>
                                <Text>Cancelados</Text>
                            </Flex>
                        </HStack>
                    </Card>
            </GroupCards>
            <Box>
                <Input
                    placeholder="Buscar"
                />
            </Box>
            <ContainerTable>
                <TableContent
                    columnsName={columnsData}
                    data={dataTable}
                    loadingDataAtApi={isLoadingDataAtApi}
                />
            </ContainerTable>
        </Layout>
    )
}

export default Dashboard