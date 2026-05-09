import { Fragment } from "react/jsx-runtime";
import type { LabelSelectBoxProps } from "../molecules/LabelSelectBox";
import LabelSelectBox from "../molecules/LabelSelectBox";

interface AppSelectboxProps extends LabelSelectBoxProps {
    errorText?: string;
}
export default function AppSelectbox(props: AppSelectboxProps) {
    return (
        <Fragment>
            <LabelSelectBox
                label={props.label}
                virtualized={props.virtualized}
                block={props.block}
                labelKey={props.labelKey}
                data={props.data}
                title={props.title}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                loading={props.loading}
                disabled={props.disabled}
                searchable={props.searchable}
                onClean={props.onClean}
                />
            {props.errorText && (<span className="ms-2 text-danger font-size-11 text-capitalize">{props.errorText}</span>)}
        </Fragment>
    )
}
