import { styled } from "../../theme"
import { Box } from "../Box"

export const Card = styled(Box, {
    borderColor: "$celestial",
    borderStyle: "$solid",
    borderWidth: "$1",
    background: "$white",
    borderRadius: "$3",
    padding: "$5",
    variants: {
        variant: {
            modal: {
                width: "$lg",
                "@largePhone": {
                    width: "auto"
                },
            },
        }
    }
})