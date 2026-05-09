import { sanitizeInput } from '@/helpers/sanitaizer';
import { Input, InputGroup, Loader } from 'rsuite';

export interface TextboxProps {
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  loading?: boolean;
  value: string;
  onChange: (e: string) => void;
  minLength?: number
  maxLength?: number
}
export default function Textbox(props: TextboxProps) {
  function sanitaizeInput(e: string) {
    return props.onChange(sanitizeInput(e))
  }
  return (
    <InputGroup inside>
      {props?.leftIcon && (<InputGroup.Addon>{props.leftIcon}</InputGroup.Addon>)}
      <Input
        placeholder={props?.placeholder}
        size={props.size ?? 'md'}
        className={`${props.className}`}
        disabled={props.disabled}
        readOnly={props.readOnly}
        value={props.value}
        onChange={sanitaizeInput}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
      <InputGroup.Addon>
        <span >
          {props?.loading ? <Loader /> :
            props?.maxLength ? `${props.value.length} / ${props?.maxLength}` : props?.rightIcon}
        </span>
      </InputGroup.Addon>
    </InputGroup >
  )
}
