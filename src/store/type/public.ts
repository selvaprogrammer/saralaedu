
export const NARRATIVE = "NARRATIVE";
export const NARRATIVE_SUCCESS = "NARRATIVE_SUCCESS";
export const NARRATIVE_ERROR = "NARRATIVE_ERROR";

export const CODING = "CODING";
export const CODING_SUCCESS = "CODING_SUCCESS";
export const CODING_ERROR = "CODING_ERROR";

export const QC = "QC";
export const QC_SUCCESS = "QC_SUCCESS";
export const QC_ERROR = "QC_ERROR";

export const SOCKET = "SOCKET";
export const SOCKET_SUCCESS = "SOCKET_SUCCESS";
export const SOCKET_ERROR = "SOCKET_ERROR";

export const GET_CODE = "GET_CODE";
export const GET_CODE_SUCCESS = "GET_CODE_SUCCESS";
export const GET_CODE_ERROR = "GET_CODE_ERROR";

export const UPDATE_NARRATIVE = "UPDATE_NARRATIVE";

export const REPORT = "REPORT";
export const REPORT_SUCCESS = "REPORT_SUCCESS";
export const REPORT_ERROR = "REPORT_ERROR";

export const SOCIAL = "SOCIAL";
export const SOCIAL_SUCCESS = "SOCIAL_SUCCESS";
export const SOCIAL_ERROR = "SOCIAL_ERROR";

export const HSHA = "HSHA";
export const HSHA_SUCCESS = "HSHA_SUCCESS";
export const HSHA_ERROR = "HSHA_ERROR";

export const FEMA = "FEMA";
export const FEMA_SUCCESS = "FEMA_SUCCESS";
export const FEMA_ERROR = "FEMA_ERROR";

export const INVESTIGATE = "INVESTIGATE";
export const INVESTIGATE_SUCCESS = "INVESTIGATE_SUCCESS";
export const INVESTIGATE_ERROR = "INVESTIGATE_ERROR";

export const FSA = "FSA";
export const FSA_SUCCESS = "FSA_SUCCESS";
export const FSA_ERROR = "FSA_ERROR";

export const RESET = "RESET";


export interface PublicState {
    connected: boolean,
    messages: any,
    narrativeLoading: boolean,
    narrativeError: any;
    narrativeData: any;
    narrativeTimeTaken: any;
    codingLoading: boolean,
    codingError: any;
    codingData: any;
    qcLoading: boolean,
    qcError: any;
    qcData: any;
    getcodeLoading: boolean,
    getcodeError: any;
    getcodeData: any;
    reportLoading: boolean,
    reportError: any;
    reportData: any;
    socialLoading: boolean,
    socialError: any;
    socialData: any;
    hshaLoading: boolean,
    hshaError: any;
    hshaData: any;
    femaLoading: boolean,
    femaError: any;
    femaData: any;
    investigateLoading: boolean,
    investigateError: any;
    investigateData: any;
    fsaLoading: boolean,
    fsaError: any;
    fsaData: any;
}

export interface reset { type: typeof RESET; }

export interface narrative { type: typeof NARRATIVE; }
export interface narrativeSuccess { type: typeof NARRATIVE_SUCCESS; payload: any; time: any }
export interface narrativeError { type: typeof NARRATIVE_ERROR; payload: any; }
export interface updatenarrative { type: typeof UPDATE_NARRATIVE; payload: any; }

export interface report { type: typeof REPORT; }
export interface reportSuccess { type: typeof REPORT_SUCCESS; payload: any; time: any }
export interface reportError { type: typeof REPORT_ERROR; payload: any; }

export interface social { type: typeof SOCIAL; }
export interface socialSuccess { type: typeof SOCIAL_SUCCESS; payload: any; time: any }
export interface socialError { type: typeof SOCIAL_ERROR; payload: any; }

export interface hsha { type: typeof HSHA; }
export interface hshaSuccess { type: typeof HSHA_SUCCESS; payload: any; time: any }
export interface hshaError { type: typeof HSHA_ERROR; payload: any; }

export interface fema { type: typeof FEMA; }
export interface femaSuccess { type: typeof FEMA_SUCCESS; payload: any; time: any }
export interface femaError { type: typeof FEMA_ERROR; payload: any; }

export interface fsa { type: typeof FSA; }
export interface fsaSuccess { type: typeof FSA_SUCCESS; payload: any; time: any }
export interface fsaError { type: typeof FSA_ERROR; payload: any; }

export interface investigate { type: typeof INVESTIGATE; }
export interface investigateSuccess { type: typeof INVESTIGATE_SUCCESS; payload: any; time: any }
export interface investigateError { type: typeof INVESTIGATE_ERROR; payload: any; }


export interface coding { type: typeof CODING; }
export interface codingSuccess { type: typeof CODING_SUCCESS; payload: any; }
export interface codingError { type: typeof CODING_ERROR; payload: any; }

export interface qc { type: typeof QC; }
export interface qcSuccess { type: typeof QC_SUCCESS; payload: any; }
export interface qcError { type: typeof QC_ERROR; payload: any; }

export interface socket { type: typeof SOCKET; }
export interface socketSuccess { type: typeof SOCKET_SUCCESS; payload: any; }
export interface socketError { type: typeof SOCKET_ERROR; }

export interface getcode { type: typeof GET_CODE; }
export interface getcodeSuccess { type: typeof GET_CODE_SUCCESS; payload: any; }
export interface getcodeError { type: typeof GET_CODE_ERROR; payload: any; }

export type PublicTypes =
    | narrative
    | narrativeSuccess
    | narrativeError
    | coding
    | codingError
    | codingSuccess
    | qc
    | qcError
    | qcSuccess
    | socket
    | socketError
    | socketSuccess
    | getcode
    | getcodeError
    | getcodeSuccess
    | updatenarrative
    | report
    | reportError
    | reportSuccess
    | social
    | socialError
    | socialSuccess
    | fema
    | femaError
    | femaSuccess
    | hsha
    | hshaError
    | hshaSuccess
    | investigate
    | investigateError
    | investigateSuccess
    | fsa
    | fsaError
    | fsaSuccess
    | reset