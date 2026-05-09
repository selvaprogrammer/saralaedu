import { getStrengthLevel, strengthLabels } from "@/helpers/passwordHelpher";
import { useState } from "react";
import { PasswordInput, PasswordStrengthMeter } from "rsuite";
interface AppPasswordboxProps {
  value: string
  onChange: (e: string) => void;
  label?: string;
  errorText?: string;
  isStrength?: boolean;
  placeholder?: string
}
export default function AppPasswordbox(props: AppPasswordboxProps) {
  const [value, setValue] = useState('');
  const level = getStrengthLevel(value);
  return (
    <div className="mb-2">
      {props.label && (<span className="ms-2">{props.label}</span>)}
      <PasswordInput value={props.value} onChange={(e) => { props.onChange(e); setValue(e) }}
        placeholder={props.placeholder ?? 'Enter your password'} />
      {props.errorText && (<span className="ms-2 text-danger font-size-11 text-capitalize">{props.errorText}</span>)}
      {props.isStrength && (<PasswordStrengthMeter level={level} label={strengthLabels[level]} />)}
    </div>
  );
}
