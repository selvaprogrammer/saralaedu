import { Fragment } from "react/jsx-runtime";
import SelectBox, { type SelectboxProps } from "../atom/Selectbox";
export interface LabelSelectBoxProps extends SelectboxProps {
    label?: string;
}
export default function LabelSelectBox(props: LabelSelectBoxProps) {
    return (
        <Fragment>
            {props.label && (<span className="ms-2">{props.label}</span>)}
            <SelectBox
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
                onClean={props.onClean}/>
        </Fragment>
    )
}
