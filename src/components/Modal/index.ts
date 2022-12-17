import { DialogContent } from "@radix-ui/react-dialog";
import { styled } from "../../theme";

export const Modal = styled(DialogContent, {
    position: "fixed",
    background: "$blackAlpha400",
    width: "100%",
    height: "100%",
    top: "0px",
    left: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})