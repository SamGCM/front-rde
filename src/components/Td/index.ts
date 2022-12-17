import { styled } from "../../theme";

export const Td = styled("td", {
    padding: "$3",
    textAlign: "center",
    variants: {
        align: {
            end: {
                textAlign: "end"
            }
        }
    }
})