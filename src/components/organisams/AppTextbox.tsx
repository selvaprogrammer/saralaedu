import LabelTextbox, { type LabelTextboxProps } from "../molecules/LabelTextbox";
export interface AppTextboxProps extends LabelTextboxProps {
  errorText?: string;
}
export default function AppTextbox(props:AppTextboxProps) {
  return (
    <div className="mb-2">
      <LabelTextbox
        placeholder={props?.placeholder || props.label}
        size={props.size ?? 'md'}
        className={`${props.className}`}
        disabled={props.disabled}
        readOnly={props.readOnly}
        value={props.value}
        onChange={props.onChange}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        loading={props.loading}
        label={`${props.label} *`}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
      {props.errorText && (<span className="ms-2 text-danger font-size-11 text-capitalize">{props.errorText}</span>)}
    </div>
  )
}
