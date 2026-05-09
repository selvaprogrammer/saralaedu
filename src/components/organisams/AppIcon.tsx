import { Whisper, Tooltip } from "rsuite";

interface AppiconProps {
  icon: any;
  tooltip: any;
}
export default function AppIcon(props: AppiconProps) {
  return (
    <Whisper placement="auto" speaker={<Tooltip>{props?.tooltip ?? ''}</Tooltip>}>
      {props.icon}
    </Whisper>
  )
}
