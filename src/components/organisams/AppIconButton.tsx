import { IconButton, Tooltip, Whisper } from "rsuite";
import type { AppearanceType } from "rsuite/esm/internals/types";
interface AppIconButtonProps {
    appearence?: AppearanceType | undefined;
    icon: any;
    className?: string;
    disabled?: boolean;
    circle?: boolean;
    loading?: boolean;
    onClick: () => void;
    tooltip:string
}
export default function AppIconButton(props: AppIconButtonProps) {
    return (
        <Whisper placement="auto" speaker={<Tooltip>{props?.tooltip ?? ''}</Tooltip>}>
            <span>
                <IconButton
                    appearance={props.appearence ?? 'subtle'}
                    size="sm"
                    icon={props.icon}
                    className={`${props.className}`}
                    disabled={props.disabled}
                    circle={props.circle}
                    onClick={props.onClick}
                    loading={props.loading}
                />
            </span>
        </Whisper>
    )
}
