import { styled } from "../../theme";

export const Wrap = styled("ul", {
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none",
    padding: "0px",
    variants: {
        direction: {
            row: {
                flexDirection: "row"
            },
            column: {
                flexDirection: "column"
            }
        },
        justify: {
            center: {
                justifyContent: "center"
            },
            start: {
                justifyContent: "start",
            },
            end: {
                justifyContent: "end"
            },
        },
        align: {
            center: {
                alignItems: "center"
            },
            start: {
                alignItems: "start",
            },
            end: {
                alignItems: "end"
            }
        },
        spacing: {
            1: {
                margin: "calc(calc ($1 / 2) * -1)",
                "& > li": {
                    margin: "calc($1 / 2)"
                }
            },
            2: {
                margin: "calc(calc ($2 / 2) * -1)",
                "& > li": {
                    margin: "calc($2 / 2)"
                }
            },
            3: {
                margin: "calc(calc($3 / 2) * -1)",
                "& > li": {
                    margin: "calc($3 / 2) "
                }
            },
            4: {
                margin: "calc(calc($4 / 2) * -1)",
                "& > li": {
                    margin: "calc($4 / 2)"
                }
            },
            5: {
                margin: "calc(calc($5 / 2) * -1)",
                "& > li": {
                    margin: "calc($5 / 2)"
                }
            },
            6: {
                margin: "calc(calc($6 / 2) * -1)",
                "& > li": {
                    margin: "calc($6 / 2) "
                }
            }
        },
        spacingX: {
            1: {
                margin: "0 calc(calc($1 / 2) * -1)",
                "& > li": {
                    margin: "0 calc($1 / 2)"
                }
            },
            2: {
                margin: "0 calc(calc($2 / 2) * -1)",
                "& > li": {
                    margin: "0 calc($2 / 2)"
                }
            },
            3: {
                margin: "0 calc(calc($3 / 2) * -1)",
                "& > li": {
                    margin: "0 calc($3 / 2) "
                }
            },
            4: {
                margin: "0 calc(calc($4 / 2) * -1)",
                "& > li": {
                    margin: "0 calc($4 / 2)"
                }
            },
            5: {
                margin: "0 calc(calc($5 / 2) * -1)",
                "& > li": {
                    margin: "0 calc($5 / 2)"
                }
            },
            6: {
                margin: "0 calc(calc($6 / 2) * -1)",
                "& > li": {
                    margin: "0 calc($6 / 2) "
                }
            }
        },
        spacingY: {
            1: {
                margin: "calc(calc($1 / 2) * -1) 0",
                "& > li": {
                    margin: "calc($1 / 2) 0"
                }
            },
            2: {
                margin: "calc(calc($2 / 2) * -1) 0",
                "& > li": {
                    margin: "calc($2 / 2) 0"
                }
            },
            3: {
                margin: "calc(calc($3 / 2) * -1) 0",
                "& > li": {
                    margin: "calc($3 / 2) 0"
                }
            },
            4: {
                margin: "calc(calc($4 / 2) * -1) 0",
                "& > li": {
                    margin: "calc($4 / 2) 0"
                }
            },
            5: {
                margin: "calc(calc($5 / 2) * -1) 0",
                "& > li": {
                    margin: "calc($5 / 2) 0"
                }
            },
            6: {
                margin: "calc(calc($6 / 2) * -1) 0",
                "& > li": {
                    margin: "calc($6 / 2) 0"
                }
            }
        }
    }
})