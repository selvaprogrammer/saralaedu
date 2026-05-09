import { Button } from "rsuite";
import type { AppearanceType } from "rsuite/esm/internals/types";

interface AppButtonProps {
    label: string;
    appearence?: AppearanceType | undefined;
    startIcon?: any;
    endIcon?: any;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}
export default function AppButton(props: AppButtonProps) {
    return (
        <Button
            appearance={props.appearence ?? 'subtle'}
            size="sm"
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            className={`${props.className}`}
            disabled={props.disabled}
            onClick={props.onClick}
            loading={props.loading}
        >
            {props.label}
        </Button>
    )
}
