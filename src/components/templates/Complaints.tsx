import React, { Component } from "react";
import { FaXmark, FaCheck, FaT, } from "react-icons/fa6";
import { Button, Input } from "rsuite";
interface Props {
    value: any,
    onChange: (e: any) => void,
    loading: boolean,
    onSubmit: (e: any) => void,
    hideFooter: boolean,
    error: any,
    placeholder: any,
    disableSubmit: boolean
}
class ComplaintsInput extends Component<Props> {
    textareaRef: any;
    constructor(props: Props) {
        super(props);
        this.textareaRef = React.createRef<HTMLTextAreaElement>();
    }
    componentDidUpdate() {
        this.autoGrow(); // adjust on props/state update
    }
    autoGrow = () => {
        const el = this.textareaRef.current as HTMLTextAreaElement | null;
        if (!el) return;
        el.style.height = "auto";
        const maxHeight = 200;
        const newHeight = Math.min(el.scrollHeight, maxHeight);
        el.style.height = `${newHeight}px`;
        el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
    };
    handleChange = (e: any) => this.props.onChange(e)
    render() {
        const { onSubmit } = this.props
        const { value, error, loading, hideFooter, placeholder, disableSubmit } = this.props;
        return (
            <div className="upload-wrapper rounded-3" style={styles.wrapper}>
                <div role="button" style={styles.inputContainer} >
                    <FaT className="text-brand-primary font-size-20" style={{ marginRight: 10 }} />
                    <Input ref={this.textareaRef} rows={1} as="textarea" role="button" placeholder={placeholder ? placeholder : "Type your complaint..."} value={value} onChange={this.handleChange} className="border-0 shadow-none bg-transparent" style={styles.textInput} />
                    <Button  className={value ? 'me-2 bg-primary-gradient text-white' : 'bg-primary-gradient text-white'} disabled={!value || loading || disableSubmit} appearance="primary" style={{ ...styles.uploadButton }} onClick={() => onSubmit(true)}>
                        <FaCheck className="text-white font-size-30" />
                    </Button>
                    {value &&
                        (<Button disabled={loading} appearance="primary" style={{ ...styles.uploadButton, background: "#000", }} onClick={() => { this.setState({ value: '' }, () => onSubmit(false)) }}>
                            <FaXmark className="text-white font-size-30" />
                        </Button>)}
                </div>
                <span className={`text-center text-${error ? 'danger' : 'brand-primary'}`}>
                    {hideFooter ? null : error ? "Complaint Should Not Be Empty" : "Powered by 3Analytics"}
                </span>
            </div>
        );
    }
}

const styles: Record<string, React.CSSProperties> = {
    wrapper: {
        width: "100%",
        maxWidth: '100vw',
        textAlign: "center",
        background: "aliceblue"
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        padding: "3px 6px",
        borderRadius: "5px",
        boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
        width: "100%",
    },
    textInput: {
        flex: 1,
        border: "none",
        outline: "none",
        fontSize: "16px"
    },
    uploadButton: {
        borderRadius: "50px",
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none"
    },
    footerText: {
        marginTop: 10,
        color: "#777",
        fontSize: 12
    }
};
export default ComplaintsInput;
