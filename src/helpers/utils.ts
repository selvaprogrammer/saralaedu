import toast from "react-hot-toast"

export const mapByName = (result: Array<any>) => {
    if (!result || !result?.length) return []
    return result?.map((e) => { return { label: e, value: e } })
}
const formatObject = (obj: any) => {
    const result: Record<string, any> = {};
    Object.keys(obj).forEach(function (key) { result[key.replaceAll(" ", "_")] = obj[key] })
    return result
}
export const setCode = (codes: any) => {
    const format = formatObject(codes);
    return format.Level_3_Code ? format.Level_3_Code : format.Level_2_Code ? format.Level_2_Code : format.Level_1_Code
}
export const setTerm = (codes: any) => {
    const format = formatObject(codes);
    return format.Level_3_Term ? format.Level_3_Term : format.Level_2_Term ? format.Level_2_Term : format.Level_1_Term
}

export const questions: any = {
    AUS: [`DT 01: Did the incident occur in Australia ?`,
        `DT 02: Did the device malfunction lead to the event of death or unanticipated serious deterioration or hospitalization or disability in a person's state of health? `,
        `DT 03: On recurrence, could the device malfunction have caused or contributed to death of a patient, user or any other person, the temporary or permanent serious deterioration of the patient's, users, or any other person's state of health?`],
    CANADA: [`DT 01: Did the incident occur in Canada?`,
        `DT 02: Did the incident relate to a failure of the device or a deterioration in its effectiveness or any inadequacy in its labelling or in its directions for use? `,
        `DT 03: Did the incident lead to hospitalization, death or a serious deterioration in the state of health of a patient, user or other person?`,
        `DT 04: If the incident were to recur, could it have led to death or a serious deterioration in the state of health of a patient, user or other person? `
    ],
    EU: [`DT01: Did the incident occur in the European Union ?`,
        `DT02: Did the device malfunction lead to the event of death or unanticipated serious deterioration or hospitalization or disability in a person's state of health? `,
        `DT03: On recurrence, could the device malfunction have caused or contributed to death of a patient, user or any other person, the temporary or permanent serious deterioration of the patient's, users, or any other person's state of health?`
    ],
    IRE: [`DT 01: Did the incident occur in Ireland ?`,
        `DT 02: Did the device malfunction lead to the event of death or unanticipated serious deterioration or hospitalization or disability in a person's state of health?`,
        `DT 03: On recurrence, could the device malfunction have caused or contributed to death of a patient, user or any other person, the temporary or permanent serious deterioration of the patient's, users, or any other person's state of health?`
    ],
    IT: [`DT 01: Did the incident occur in Italy ?`,
        `DT 02: Did the device malfunction lead to the event of death or unanticipated serious deterioration or hospitalization or disability in a person's state of health?`,
        `DT 03: On recurrence, could the device malfunction have caused or contributed to death of a patient, user or any other person, the temporary or permanent serious deterioration of the patient's, users, or any other person's state of health?`
    ],
    JAPAN: [`DT 01: Did the incident occur or the product sold in Japan?`,
        `DT 02: Did the device malfunction caused or contributed to any of the following: life threatening event, permanent impairment of body function, permanent damage of body structure, medical intervention, hospitalization (initial or prolonged), exposure of wound or death?`,
        `DT 03: Will the device malfunction recur, could it attribute to any of the following: life threatening event, permanent impairment of body function, permanent damage of body structure, medical intervention, hospitalization (initial or prolonged), exposure of wound or death?`
    ],
    USA: [`DT 01: Does the information reasonably suggest that the device malfunctioned?`,
        `DT 02: If the device malfunction were to recur, would it cause or contribute to patient harm, death, permanent impairment of body function, permanent damage of body structure or require medical or surgical intervention? `,
        `DT 03: Does the device malfunction caused or contributed to an injury involving any of the following: Life threatening event, Permanent impairment of body function, permanent damage of body structure, medical intervention or exposure of wound? `,
        `DT 04: Does the device malfunction result or contributed to Death?`]
}

export const validFileCheck = (event: any) => {
    const file = event.target.files[0];
    if (file) {
        const allowedExtensions = ["xlsx", "xls", "csv"];
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) return toast.error('Invalid file format..');
        return file.name
    }
};

export const powerBiUri: any = {
    arima: 'https://app.powerbi.com/view?r=eyJrIjoiMjQwZjlmNDQtZmU4Yy00M2E0LTllN2MtMjQ4N2YyOWY3NmI2IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    radadp: 'https://app.powerbi.com/view?r=eyJrIjoiNDU5NmYyZDQtOWUzMC00ODMwLTgzNDItMjkxYjE4ZTI4ODc5IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    idc: 'https://app.powerbi.com/view?r=eyJrIjoiOTUxNjcwMjEtYWY1YS00Y2E1LTg5YjAtYjU3OTM5MTFiZjQ1IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    dc: 'https://app.powerbi.com/view?r=eyJrIjoiYjU3M2M5YjgtMGZjOS00ZGFmLWE2YzUtZGE3NzYxMGNmM2MwIiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    maude: 'https://app.powerbi.com/view?r=eyJrIjoiNjA5MjQwZTctNDg2Yi00N2Q1LWJiMGItNTZlNzZjNGNiMDc2IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    if: 'https://app.powerbi.com/view?r=eyJrIjoiOGFjOWE0OTAtZjJlOS00Yzg0LWE4YjYtYmI3ODFmMTc2MjcwIiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    lrt: 'https://app.powerbi.com/view?r=eyJrIjoiN2YyNTkxZTMtOWQxYi00NDU5LWEyMjYtNzNhYmRkNDY1MThkIiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    recall: 'https://app.powerbi.com/view?r=eyJrIjoiNzBhNTM5NTItYTY1Zi00OWU1LTg3YTctMzY0ODdiZTQ1MjM1IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9',
    recallPrediction: "https://app.powerbi.com/view?r=eyJrIjoiNzUwZTE3ZGYtMGFiYi00ZTg2LTkyNDgtMDUzMzBjMTg3YTY3IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9",
    prr: "https://app.powerbi.com/view?r=eyJrIjoiZjVlYThkMzItMjA4OS00NTM1LThmNDItYTMxMjBmYTI3Njg1IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9&type=&title=PRR",
    ror: "https://app.powerbi.com/view?r=eyJrIjoiOWY5M2FmMDgtNTI5NC00YjAyLTk5ODAtMDM4ZThmYjlmNTE4IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9&type=&title=ROR",
    rr: "https://app.powerbi.com/view?r=eyJrIjoiMjUwN2M4ODgtZmQ1MC00ZTIzLThhMGMtNmZlNDE0YWI5N2FmIiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9&pageName=ReportSection35b8d0b8f21864020eb2&type=&title=RR",
    chisquare: "https://app.powerbi.com/view?r=eyJrIjoiNzA1YzdiOTgtMzJkMy00NWM1LWE0OWItZjRkMmUzM2NiMzA5IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9&pageName=ReportSection35b8d0b8f21864020eb2&type=&title=CHI-SQUARE",
    ebgm: "https://app.powerbi.com/view?r=eyJrIjoiZGUwYzBlNmEtYzcyNC00YWM1LWJkYjItYmE1OTExY2Y0OGYwIiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9&pageName=ReportSection35b8d0b8f21864020eb2&type=&title=EBGM",
    lttsImdrf: "https://app.powerbi.com/view?r=eyJrIjoiZjU1ZjIzY2MtM2RkNi00ZDA1LTlkOWItNzY3N2RmNWMwZjI5IiwidCI6IjNhMzQ0NmI3LTAxZDktNGUxYy1iNTgwLWYyZWFlMzdlY2U5NiJ9"
}

export const downloadCSV = (value: any) => {
    const fileName = value == 'phase1Xl' ? '/files/ImdrfOutput.csv' : value == 'statXl' ? '/files/statDevice.csv' : '/files/finalOutput.csv';
    const link = document.createElement('a');
    link.href = fileName;
    link.download = Date.now() + '-' + value + '.csv';
    link.click();
};