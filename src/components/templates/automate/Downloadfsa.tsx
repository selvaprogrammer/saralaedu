import AppButton from "@/components/organisams/AppButton";
import type { AppDispatch } from "@/store";
import { CommonAction } from "@/store/action/public";
import type { RootState } from "@/store/reducer";
import { config } from "@helpers/configuration";
import { useEffect, useMemo, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { GiHealthCapsule } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "rsuite";
interface Props {
    comment: string | null;
}
export default function Downloadfsa(props: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const [blobUri, setBlobUri]: any = useState(null)
    const [blob, setBlob]: any = useState(null)
    const { fsaData, fsaLoading } = useSelector((state: RootState) => state.public);
    useMemo(() => { setBlobUri(null); }, [props.comment])
    useEffect(() => {
        if (fsaData) {
            const blobContent = new Blob([fsaData], {
                type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });
            setBlob(blobContent);
            setBlobUri(`fsa-report-${Date.now()}.docx`)
        }
    }, [fsaData]);
    function download(blobContent: Blob | MediaSource) {
        const url = window.URL.createObjectURL(blobContent);
        const link = document.createElement("a");
        link.href = url;
        link.download = `fsa-report-${Date.now()}.docx`;
        setBlobUri(link.download)
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    }
    return (
        <div>{fsaLoading ? <Loader /> : blobUri ?
            <AppButton className="border-brand-primary text-brand-primary" label={blobUri} startIcon={<FiDownload />} onClick={() => { download(blob) }} />
            :
            <AppButton className="bg-brand-primary text-white" disabled={!props.comment} label="FSA" startIcon={<GiHealthCapsule />} onClick={() => { dispatch(CommonAction('fsa', config.openAi + `fsa`, { prompt: props.comment }, 'get')) }} />
        }</div>
    )
}
