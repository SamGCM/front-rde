import { styled } from "../../theme";

export const Icon = styled("img", {
    cursor: "pointer",
    wh: "calc($1 / 1.5)",
    variants: {
        radius: {
            round: {
                borderRadius: "$round"
            }
        },
        size: {
            1: {
                wh: "calc($1 / 2)"
            },
            2: {
                wh: "calc($1 / 1.5)"
            },
            3: {
                wh: "$1"
            },
            4: {
                wh: "$2"
            },
            5: {
                wh: "$3"
            },
            6: {
                wh: "$4"
            },
            7: {
                wh: "$5"
            }
        },
        pointer: {
            true: {
                cursor: "pointer"
            }
        },
        variant: {
            filled: {
                background: "$quaternary",
                padding: "calc($2 / 1.2)",
                wh: "calc($1 / 1.2)"
            }
        },
        svg: {
            true: {
                "@media (max-width: 1000px)": {
                    wh: "calc($1 / 1.5)",
                },
            }
        },
    },
})