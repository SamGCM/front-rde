import { styled } from "../../theme";

export const Table = styled("table", {
    borderCollapse: "collapse",
    width: "-webkit-fill-available",
    variants: {
        variant: {
            simple: {
                "tbody > tr > td": {
                    borderTop: "$borderWidths$1 $borderStyles$solid $colors$grayShadow"
                },
                "thead > tr > th": {
                    border: "none",
                    color: "$gray"
                }
            },
            striped: {
                "tbody > tr:nth-child(odd)": {
                    background: "$white",
                    borderTop: "$borderWidths$1 $borderStyles$solid $colors$grayShadow"
                },
                "tbody > tr:nth-child(even)": {
                    background: "$grayDark",
                    borderTop: "$borderWidths$1 $borderStyles$solid $colors$grayShadow"
                },
                "thead > tr > th": {
                    background: "$grayDark",
                    color: "$gray"
                }
            },
            unstyled: {
                "tbody > tr > td": {
                    borderWidth: "0px",
                },
                "thead > tr > th": {
                    borderWidth: "0px",
                    color: "$gray"
                }
            }
        },
        margin: {
            1: {
                margin: "$1"
            },
            2: {
                margin: "$2"
            },
            3: {
                margin: "$3"
            },
            4: {
                margin: "$4"
            },
            5: {
                margin: "$5"
            },
            6: {
                margin: "$6"
            },
            7: {
                margin: "$7"
            },
            8: {
                margin: "$8"
            },
            9: {
                margin: "$9"
            },
        },
        size: {
            sm: {
                "& > tr > td": {
                    fontSize: "$2"
                },

                "& > tr > th": {
                    fontSize: "$1"
                },
            },
            md: {
                "& > tr > td": {
                    fontSize: "$3"
                },

                "& > tr > th": {
                    fontSize: "$2"
                },
            },
        },
        max: {
            true: {
                width: "$full"
            }
        }
    },
    defaultVariants: {

    }
})