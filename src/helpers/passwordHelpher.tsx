const requirements = [
    { re: /[0-9]/ },
    { re: /[a-z]/ },
    { re: /[A-Z]/ },
    { re: /[$&+,:;=?@#|'<>.^*()%!-_]/ }
];
const strengthLabels = ['Very weak', 'Weak', 'Fair', 'Strong'];
function getStrengthLevel(password: string) {
    const passed = requirements.reduce((acc, req): any => acc + req.re.test(password), 0);
    const hasLength = password.length >= 8;
    // 0: very weak, 1: weak, 2: fair, 3: strong
    if (passed <= 1) return 0;
    if (passed === 2) return 1;
    if (passed === 3) return 2;
    if (passed === requirements.length && hasLength) return 3;
    return 2;
}
export {strengthLabels,getStrengthLevel}