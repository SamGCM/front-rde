import { useState } from "react"
import { Input } from "../Input"
import { SuggestionLabel } from "../SuggestionLabel"
import { VStack } from "../VStack"
import { TInputSearch } from "./interface"
import { RiSearchLine } from "react-icons/ri"
import { HStack } from "../HStack"
import { ContainerInputSearch } from "../ContainerInputSearch"
import React from "react";
import { BoxSuggestions } from "../BoxSuggestoions"

const InputSearch = <T extends unknown = unknown>({
    value,
    id,
    name,
    data,
    keyExtractor,
    renderItem,
    ...props
}: TInputSearch<T>
): React.ReactElement => {

    const [valueField, setValueField] = useState("")
    const [isShowTips, setIsShowTips] = useState(false)
    const handlerTips = (value: string): void => setValueField(value)

    return (
        <>
        <ContainerInputSearch
            variant="outline"
        >
            <HStack
                align="center"
            >
                <RiSearchLine
                    className="icon"
                    opacity={"30%"}
                />
                <Input
                    {...props}
                    id={id}
                    name={name}
                    value={valueField}
                    variant="unstyled"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setValueField(e.target.value)
                    }}
                    onFocus={() => {
                        setIsShowTips(true)
                    }}
                    onBlur={() => {
                        setTimeout(
                            () => setIsShowTips(false)
                            ,100
                        )
                    }}
                />
            </HStack>
        <BoxSuggestions>
            <VStack>
                {
                    isShowTips &&
                        data.map((item) => (
                            <SuggestionLabel
                                size={props.sizes}
                                key={keyExtractor(item)}
                                onClick={() => {
                                    handlerTips(keyExtractor(item))
                                    setIsShowTips(false)
                                }}
                            >
                                { renderItem(item) }
                            </SuggestionLabel>
                        ))
                }
            </VStack>
        </BoxSuggestions>
        </ContainerInputSearch>
    </>
    )
}

export default InputSearch