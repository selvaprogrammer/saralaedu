import AppSelectbox from "@/components/organisams/AppSelectbox";
import ComplaintsInput from "../Complaints";
import { mapByName } from "@/helpers/utils";
import type { AppDispatch } from "@/store";
import { CommonAction } from "@/store/action/public";
import type { RootState } from "@/store/reducer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { config } from "@/helpers/configuration";
interface Props {
    onSubmit: (e: any) => void;
    comment?: string | null;
}
export default function NarrativeForm(props: Props) {
    const { codingData, codingLoading, narrativeLoading, reportLoading } = useSelector((state: RootState) => state.public);
    const [form, setForm] = useState({ type: "", narrative: "", comment: "", typeList: [], narrativeList: [] });
    const [error, setError] = useState<any>();
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { if (props.comment) handleChange('comment', props.comment) }, [props?.comment]);
    useEffect(() => { if (!codingData) dispatch(CommonAction('coding', config.narrative)); }, [codingData]);
    const handleChange = (title: string, value: any) => { setForm(prev => ({ ...prev, [title]: value })); handleError(title, value ? '' : `${title} is required`) }
    const handleError = (title: string, value: any) => setError((prev: any) => ({ ...prev, [title]: value }));
    useEffect(() => {
        if (codingData) {
            let typeList = codingData?.map((e: any) => e.vertical);
            if (typeList?.length) handleChange('typeList', mapByName(typeList));
        }
    }, [codingData])
    useEffect(() => {
        if (form.type) {
            let narrativeList = codingData?.find((e: any) => e.vertical == form.type);
            if (narrativeList && Object.entries(narrativeList).length) handleChange('narrativeList', mapByName(narrativeList?.narratives));
        }
    }, [form.type])
    return (
        <div className="row">
            <div className="col-6 w-50">
                <AppSelectbox errorText={error?.type} block data={form.typeList} onChange={(e) => { handleChange('type', e) }} value={form.type} title="Type" loading={codingLoading} />
            </div>
            <div className="col-6 w-50">
                <AppSelectbox errorText={error?.narrative} block data={form.narrativeList} onChange={(e) => { handleChange('narrative', e); handleChange('comment', e) }} value={form.narrative} title="Narrative" loading={codingLoading} />
            </div>
            <div className="col-12 mt-3 mb-3">
                <ComplaintsInput
                    disableSubmit={error?.comment}
                    error={error?.comment}
                    hideFooter={error?.comment}
                    loading={codingLoading || narrativeLoading || reportLoading}
                    onChange={(comment) => { handleChange('comment', comment) }}
                    onSubmit={(e) => { if (!e) { return handleChange('comment', "") }  props.onSubmit({ text: form.comment }) }}
                    placeholder={'Enter your comments'}
                    value={form.comment} />
            </div>
        </div>
    )
}
