import { convertMoney } from "../../utils/convertMoney"
import { moneyType } from "../../utils/moneyType"
import { Column } from "../Column"
import { Flex } from "../Flex"
import { Label } from "../Label"
import { Row } from "../Row"
import { Text } from "../Text"
import { VStack } from "../VStack"
import { IContentDetails } from "./interface"
import React from "react"

const ContentDetails = ({
    item
}: IContentDetails
): React.ReactElement => {

    return (
        <VStack
            spacing="3"
            align="start"
        >
            <Flex
                direction="column"
                align="start"
            >
                <Label>
                    Nome pessoa nacional 
                </Label>
                <Text
                    align="start"
                >
                    {item.NomePessoaNacional}
                </Text>
            </Flex>

            <Flex
                direction="column"
                align="start"
            >
                <Label>
                    Nome pessoa estrangeira 
                </Label>
                <Text
                    align="start"
                >
                    {item.NomePessoaEstrangeira}
                </Text>
            </Flex>

            <Flex
                direction="column"
                align="start"
            >
                <Label>
                    Modalidade
                </Label>
                <Text
                    align="start"
                >
                    {item.Modalidade}
                </Text>
            </Flex>

            <Flex
                direction="column"
                align="start"
            >
                <Label>
                    País pessoa estrangeira
                </Label>
                <Text
                    align="start"
                >
                    {item.PaisPessoaEstrangeira}
                </Text>
            </Flex>

            <Row>
                <Column>
                    <Flex
                        direction="column"
                        align="start"
                    >
                        <Label>
                            Sistema
                        </Label>
                        <Text>
                            {item.Sistema}
                        </Text>
                    </Flex>
                </Column>
                <Column>
                    <Flex
                        direction="column"
                        align="start"
                    >
                        <Label>
                            Código
                        </Label>
                        <Text>
                            {item.CodigoRDE}
                        </Text>
                    </Flex>
                </Column>
            </Row>

            <Flex
                direction="column"
                align="start"
            >
                <Label>
                Valor
                </Label>
                <Text>
                    {  moneyType(item.MoedaOperacao as string) + " " + convertMoney(item.ValorOperacao?.toString() as string) }
                </Text>
            </Flex>
        </VStack>
    )
}

export default ContentDetails