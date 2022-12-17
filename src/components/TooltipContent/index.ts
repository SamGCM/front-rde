import * as ReactTooltip from '@radix-ui/react-tooltip';
import { styled } from '../../theme';

export const TooltipContent = styled(ReactTooltip.Content, {
    background: "$primary",
    borderRadius: "$3",
    padding: "$1 $3",
    fontSize: "$1",
    color: "$primaryText",
})