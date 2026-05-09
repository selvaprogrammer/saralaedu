const base = import.meta.env;
export const config = {
    env: base.VITE_ENV,
    narrative:base.VITE_NARRATIVE,
    emailSave:base.VITE_EMAIL_SAVE,
    imdrf:base.VITE_IMDRF,
    report:base.VITE_REPORT,
    socket:base.VITE_SOCKET,
    openAi:base.VITE_SOCKET+base.VITE_OPENAI,
    user:base.VITE_USER,
    password:base.VITE_PASS
}