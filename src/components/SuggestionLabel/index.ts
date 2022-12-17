import { styled } from "../../theme";
import { Text } from "../Text";

export const SuggestionLabel = styled(Text, {
    paddingInlineStart: "$3",
    paddingInlineEnd: "$3",
    cursor: "pointer",
    height: "$1",
    lineHeight: "$sizes$1",

    "&:hover": {
        background: "$primary",
        color: "$primaryText",
    }
})