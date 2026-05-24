import { FaArrowLeftLong } from 'react-icons/fa6';
import AppButton from '../organisams/AppButton';
import { useNavigate } from 'react-router-dom';
interface Props{
    label:string;
    title:string;
    link:string;
}
export default function AppHeader(props:Props) {
    const navigate = useNavigate();
    return (
        <div className="flex-row-between border-bottom">
            <AppButton
                label={props.label}
                startIcon={<FaArrowLeftLong />}
                className="bg-primary-gradient text-white"
                onClick={() => { navigate(props.link); }}
            />
            <h4>{props.title}</h4>
            <span></span>
        </div>
    )
}
