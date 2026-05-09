import { useRef } from "react";
export const AppAccordion = ({ title, children, isOpen, onClick }: any) => {
    const contentRef = useRef<any>(null);
    return (
        <div className="mb-2" >
            <div className="border shadow-sm rounded-top-2 p-2 text-brand-primary" onClick={onClick}>
                {title}
                <span role="button" style={{ float: "right", transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
            </div>
            <div ref={contentRef} style={{ maxHeight: isOpen ? `${contentRef?.current?.scrollHeight}px` : "0px", overflow: "hidden", transition: "max-height 0.35s ease", }}>
                <div className="p-2 bg-badge-soft-primary-bg border rounded-bottom-3">
                    {children}
                </div>
            </div>
        </div>
    );
};