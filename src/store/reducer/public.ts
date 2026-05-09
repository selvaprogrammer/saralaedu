import { setCode } from "@/helpers/utils";
import {
    CODING, CODING_ERROR, CODING_SUCCESS, NARRATIVE, NARRATIVE_ERROR, NARRATIVE_SUCCESS, QC, QC_ERROR, QC_SUCCESS,
    SOCKET, SOCKET_ERROR, SOCKET_SUCCESS, GET_CODE, GET_CODE_ERROR, GET_CODE_SUCCESS, UPDATE_NARRATIVE, REPORT,
    REPORT_ERROR, REPORT_SUCCESS, SOCIAL, SOCIAL_ERROR, SOCIAL_SUCCESS, HSHA, HSHA_ERROR, HSHA_SUCCESS, FEMA, FEMA_ERROR, FEMA_SUCCESS,
    INVESTIGATE, INVESTIGATE_ERROR, INVESTIGATE_SUCCESS, FSA, FSA_ERROR, FSA_SUCCESS, RESET,
    type PublicState, type PublicTypes
} from "@store/type/public";
const init: PublicState = {
    codingData: null,
    codingError: null,
    codingLoading: false,
    connected: false,
    messages: null,
    narrativeData: null,
    narrativeError: null,
    narrativeLoading: false,
    qcData: null,
    qcError: null,
    qcLoading: false,
    getcodeData: null,
    getcodeError: null,
    getcodeLoading: false,
    narrativeTimeTaken: null,
    reportData: null,
    reportError: null,
    reportLoading: false,
    socialData: null,
    socialError: null,
    socialLoading: false,
    hshaData: null,
    hshaError: null,
    hshaLoading: false,
    femaData: null,
    femaError: null,
    femaLoading: false,
    investigateData: null,
    investigateError: null,
    investigateLoading: false,
    fsaData: null,
    fsaError: null,
    fsaLoading: false
};
export function publicReducer(state = init, action: PublicTypes): PublicState {
    switch (action.type) {
        case CODING: return { ...state, codingLoading: true, codingError: null, codingData: null };
        case CODING_ERROR: return { ...state, codingLoading: false, codingError: action.payload, codingData: null };
        case CODING_SUCCESS: return { ...state, codingLoading: false, codingError: null, codingData: JSON.parse(action.payload), };

        case NARRATIVE: return { ...state, narrativeLoading: true, narrativeError: null, narrativeData: null };
        case NARRATIVE_ERROR: return { ...state, narrativeLoading: false, narrativeError: action.payload, narrativeData: null };
        case NARRATIVE_SUCCESS: return { ...state, narrativeLoading: false, narrativeError: null, narrativeData: action.payload.result, narrativeTimeTaken: action.time, qcData: null };

        case REPORT: return { ...state, reportLoading: true, reportError: null, reportData: null };
        case REPORT_ERROR: return { ...state, reportLoading: false, reportError: action.payload, reportData: null };
        case REPORT_SUCCESS: return { ...state, reportLoading: false, reportError: null, reportData: action.payload, };

        case SOCIAL: return { ...state, socialLoading: true, socialError: null, socialData: null };
        case SOCIAL_ERROR: return { ...state, socialLoading: false, socialError: action.payload, socialData: null };
        case SOCIAL_SUCCESS: return { ...state, socialLoading: false, socialError: null, socialData: action.payload, };

        case HSHA: return { ...state, hshaLoading: true, hshaError: null, hshaData: null };
        case HSHA_ERROR: return { ...state, hshaLoading: false, hshaError: action.payload, hshaData: null };
        case HSHA_SUCCESS: return { ...state, hshaLoading: false, hshaError: null, hshaData: JSON.parse(action.payload?.response), };

        case FEMA: return { ...state, femaLoading: true, femaError: null, femaData: null };
        case FEMA_ERROR: return { ...state, femaLoading: false, femaError: action.payload, femaData: null };
        case FEMA_SUCCESS: return { ...state, femaLoading: false, femaError: null, femaData: JSON.parse(action.payload?.response), };

        case FSA: return { ...state, fsaLoading: true, fsaError: null, fsaData: null };
        case FSA_ERROR: return { ...state, fsaLoading: false, fsaError: action.payload, fsaData: null };
        case FSA_SUCCESS: return { ...state, fsaLoading: false, fsaError: null, fsaData: action.payload, };

        case INVESTIGATE: return { ...state, investigateLoading: true, investigateError: null, investigateData: null };
        case INVESTIGATE_ERROR: return { ...state, investigateLoading: false, investigateError: action.payload, investigateData: null };
        case INVESTIGATE_SUCCESS: return { ...state, investigateLoading: false, investigateError: null, investigateData: action.payload?.response, };

        case QC: return { ...state, qcLoading: true, qcError: null, qcData: null };
        case QC_ERROR: return { ...state, qcLoading: false, qcError: action.payload, qcData: null };
        case QC_SUCCESS: return { ...state, qcLoading: false, qcError: null, qcData: action.payload, };

        case SOCKET: return { ...state, connected: true, messages: null };
        case SOCKET_ERROR: return { ...state, connected: false, messages: null };
        case SOCKET_SUCCESS: return { ...state, connected: true, messages: action.payload };

        case GET_CODE: return { ...state, getcodeLoading: true, getcodeError: null, getcodeData: null };
        case GET_CODE_ERROR: return { ...state, getcodeLoading: false, getcodeError: action.payload, getcodeData: null };
        case GET_CODE_SUCCESS: return { ...state, getcodeLoading: false, getcodeError: null, getcodeData: action.payload, };

        case RESET: return { ...state, femaData: null, fsaData: null, getcodeData: null, hshaData: null, investigateData: null, narrativeData: null, qcData: null, reportData: null, socialData: null };

        case UPDATE_NARRATIVE:
            const { key, index } = action.payload;
            const result = state.getcodeData?.result?.[key] ?? [];
            const filteredData = result.filter((item: any) => {
                const code = setCode(item); return Boolean(code);
            });
            if (!filteredData.length) return state;
            const updatedNarrative = [...(state.narrativeData[key] ?? [])];
            updatedNarrative[index] = filteredData[0];
            return {
                ...state, getcodeData: null, narrativeData: { ...state.narrativeData, [key]: updatedNarrative }
            };
        default:
            return { ...state };
    }
}
