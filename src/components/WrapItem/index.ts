import { styled } from "../../theme";

export const WrapItem = styled("li", {
    variants: {
        hover: {
            true: {
                "&:hover": {
                    color: "$primary"
                }
            }
        }
    }
})