import * as ReactTooltip from '@radix-ui/react-tooltip';
import React from "react";
import { TooltipArrow } from '../TooltipArrow';
import { TooltipContent } from '../TooltipContent';
import { TooltipTrigger } from '../TooltipTrigger';

export interface ITooltip {
    children: React.ReactNode,
    content?: React.ReactNode
}

export const Tooltip = ({
  children,
  content
}: ITooltip
): React.ReactElement => {
  return (
    <ReactTooltip.Provider>
      <ReactTooltip.Root>
        <TooltipTrigger>
          { children }
        </TooltipTrigger>
        <ReactTooltip.Portal>
          <TooltipContent>
            { content }
          <TooltipArrow/>
          </TooltipContent>
        </ReactTooltip.Portal>
      </ReactTooltip.Root>
    </ReactTooltip.Provider>
  );
}