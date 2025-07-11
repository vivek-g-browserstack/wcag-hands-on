import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function HoverableBroken() {
    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="w-fit block mx-auto">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="w-48">Try hovering into this text and see if I feel shy and disappear.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}