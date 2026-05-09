import { SelectPicker } from "rsuite";

export interface SelectboxProps {
    data: Array<any>;
    title?: string;
    onChange: (e: any, i: any) => void;
    labelKey?: string;
    placeholder?: string;
    value: any;
    loading?: boolean;
    disabled?: boolean;
    block?: boolean
    virtualized?: boolean;
    searchable?: boolean;
    onClean?:()=>void;
}
export default function SelectBox(props: SelectboxProps) {
    return (
        <SelectPicker
            size='md'
            placement="auto"
            virtualized={props.virtualized}
            block={props.block}
            labelKey={props.labelKey}
            data={props.data}
            label={props.title}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
            loading={props.loading}
            disabled={props.disabled}
            searchable={props.searchable}
            preventOverflow
            onClean={props.onClean}
        />
    )
}
