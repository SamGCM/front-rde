import { keyframes, styled } from "../../theme";

const blink = keyframes({
    '100%': {
        opacity: "$opacity$heavy",
    },
});

export const Skeleton = styled("div", {
    
    variants: {
        isLoaded: {
            true: {
                animationTimingFunction: "linear",
                animationDelay: "0s",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationFillMode: "none",
                animationPlayState: "running",
                animationName: `${blink}`,
                opacity: "$opacity$medium",
                userSelect: "none",
                pointerEvents: "none",
                borderRadius: "$2",
                background: "padding-box $grayLight",
                "& > *": {
                    visibility: "hidden"
                }
            }
        },
        size: {
            auto: {
                height: "auto"
            },
            1: {
                height: "$1",
            },
            2: {
                height: "$2",
            },
            3: {
                height: "$3",
            },
            4: {
                height: "$4",
            },
            5: {
                height: "$5",
            },
        },
        speed: {
            1: {
                animationDuration: "$animationDuration$1",
            },
            2: {
                animationDuration: "$animationDuration$2",
            },
            3: {
                animationDuration: "$animationDuration$3",
            },
        },
        
    },
    defaultVariants: {
        isLoaded: true,
        size: "auto",
        speed: "2",
    }
})