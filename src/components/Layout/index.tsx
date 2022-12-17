import { Background } from "../Background"
import { ILayout } from "./interface"
import React from "react"
import { SideBar } from "../Sidebar"
import { LayoutContent } from "../LayoutContent"
import { Heading } from "../Heading"
import { LayoutHeader } from "../LayoutHeader"
import { VStack } from "../VStack"

const Layout = ({
    children,
    title
}: ILayout
): React.ReactElement => {

    return (
        <Background>
            <LayoutContent>
                <LayoutHeader>
                    { title }
                </LayoutHeader>
                <VStack
                    spacing="4"
                >
                    { children }
                </VStack>
            </LayoutContent>
        </Background>
    )
}

export default Layout