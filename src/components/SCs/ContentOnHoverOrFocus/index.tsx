import { useState } from "react"
import { HoverableBroken } from "./broken/Hoverable"
import { PersistentBroken } from "./broken/Persistent"
import { DismissibleBroken } from "./broken/Dismissible"
import { HoverableFixed } from "./fixed/Hoverable"
import { PersistentFixed } from "./fixed/Persistent"
import { DismissibleFixed } from "./fixed/Dismissible"
import { SectionHeading } from "@/components/SectionHeading"
import { useGlobalStore } from "@/store/globalStore"
import SectionContent from "@/components/SectionContent"
import ExampleCard from "@/components/ExampleCard"

export function ContentOnFocusOrHover() {
    const [isFixed, setIsFixed] = useState(false)
    const { isResponsive } = useGlobalStore()
    const id = "content-on-hover-or-focus"

    return (
        <section id={id}>
            <SectionHeading
                title="1.4.13 Content on hover or focus"
                id={id}
                href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
                toggleId="content-on-hover-or-focus-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <SectionContent>
                <div className={`grid ${isResponsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'} gap-6`}>
                    <ExampleCard isFixed={isFixed}>
                        <h3
                            className={`font-bold font-display italic text-xl flex items-center mb-2 ${isFixed ? `text-success-default` : `text-danger-default`}`}
                        >
                            <span className="material-symbols-outlined">deployed_code</span>
                            &nbsp;{isFixed ? `Hoverable` : `Non hoverable`} tooltips
                        </h3>
                        <p className={`text-slate-500 ${isResponsive ? 'text-sm sm:text-base' : ''} mb-8`}>Once the tooltip appears, move your mouse into the tooltip content and see if the tooltip disappears</p>
                        {isFixed ? <HoverableFixed /> : <HoverableBroken />}
                    </ExampleCard>
                    <ExampleCard isFixed={isFixed}>
                        <h3
                            className={`font-bold font-display italic flex items-center text-xl mb-2 ${isFixed ? `text-success-default` : `text-danger-default`}`}>
                            <span className="material-symbols-outlined">deployed_code</span>
                            &nbsp;{isFixed ? `Persistent` : `Non persistent`} tooltips
                        </h3>
                        <p className={`text-slate-500 mb-8`}>Once the tooltip appears, see if the tooltip holds as long as you hover(or focus the trigger)</p>
                        {isFixed ? <PersistentFixed /> : <PersistentBroken />}
                    </ExampleCard>
                    <ExampleCard isFixed={isFixed}>
                        <h3
                            className={`font-bold font-display italic flex items-center text-xl mb-2 ${isFixed ? `text-success-default` : `text-danger-default`}`}
                        >
                            <span className="material-symbols-outlined">deployed_code</span>
                            &nbsp;{isFixed ? `Dismissible` : `In-dismissible`} tooltips
                        </h3>
                        <p className={`text-slate-500 mb-8`}>Once the tooltip appears, press Esc and check if it can be dismissed</p>
                        {isFixed ? <DismissibleFixed /> : <DismissibleBroken />}
                    </ExampleCard>
                </div>
            </SectionContent>
        </section>
    )
}