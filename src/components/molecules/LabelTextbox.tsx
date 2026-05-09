import { Fragment } from "react/jsx-runtime";
import Textbox, { type TextboxProps } from "../atom/Textbox";

export interface LabelTextboxProps extends TextboxProps{
  label?: string;
}
export default function LabelTextbox(props:LabelTextboxProps) {
  return (
    <Fragment>
      {props.label && (<span className="ms-2">{props.label}</span>)}
      <Textbox
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
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
    </Fragment>
  )
}
