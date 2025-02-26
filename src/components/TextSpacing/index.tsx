import { useState } from "react"
import { Switch } from "../ui/switch"
import { ButtonBroken } from "./broken/Button"
import { CardBroken } from "./broken/Card"
import { TableBroken } from "./broken/Table"
import { ButtonFixed } from "./fixed/Button"
import { CardFixed } from "./fixed/Card"
import { TableFixed } from "./fixed/Table"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function TextSpacing() {
    const [isFixed, setIsFixed] = useState(false)
    // const [applyWCAGValues, setApplyWCAGValues] = useState(true)

    return (
        <section id="text-spacing" className="px-4">
            {true &&
                <style>
                    {`
                        #text-spacing-wcag > * {
                            line-height: 1.5 !important;
                            letter-spacing: 0.12em !important;
                            word-spacing: 0.16em !important;
                        }

                        #text-spacing-wcag > p {
                            margin-bottom:2em !important;
                        }
                `}
                </style>
            }
            <div className="grid grid-cols-3 gap-8 justify-between items-center bg-slate-100 rounded-lg px-2 py-4 mb-2">
                <h2 className="text-2xl">
                    1.4.12 Text spacing
                </h2>
                <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing" target="_blank"
                    className="text-center"
                >
                    Detailed explanation
                </a>
                <div className="flex gap-2 justify-end items-center">
                    <label htmlFor="text-spacing-compliance">Make examples compliant</label>
                    <Switch
                        id="text-spacing-compliance"
                        onCheckedChange={(state) => {
                            setIsFixed(state)
                        }}
                    />
                </div>
            </div>

            <div className="flex gap-2 items-center mb-2">
                {/* <label htmlFor="text-spacing-apply-wcag-values">Apply WCAG text spacing values</label>
                <Switch
                    checked={applyWCAGValues}
                    id="text-spacing-apply-wcag-values"
                    onCheckedChange={(state) => {
                        setApplyWCAGValues(state)
                    }}
                /> */}
                <span className="flex items-center">
                    WCAG recommended text spacing values are applied to examples
                    <TooltipProvider>
                        <Tooltip delayDuration={200} defaultOpen={true}>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" className="w-fit mx-auto px-2 py-0">ⓘ</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="w-84">
                                    <code>
                                        line-height: 1.5; <br />
                                        letter-spacing: 0.12em;  <br />
                                        word-spacing: 0.16em;  <br />
                                        margin-bottom: 2em;
                                    </code>
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
            </div>

            <p className="mb-4">To allow variation in text spacing, avoid fixed widths for buttons, fixed heights for table rows, fixed heights for heights without scroll for overflow. </p>

            <div id="text-spacing-wcag" className="grid grid-cols-3 gap-8">
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className="font-bold mb-4 text-orange-600">Buttons with fixed widths</h3>
                    {isFixed ? <ButtonFixed /> : <ButtonBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className="font-bold mb-4 text-orange-600">Table rows with fixed heights</h3>
                    {isFixed ? <TableFixed /> : <TableBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className="font-bold mb-4 text-orange-600">Cards with fixed heights</h3>
                    {isFixed ? <CardFixed /> : <CardBroken />}
                </div>

            </div>
        </section>
    )
}