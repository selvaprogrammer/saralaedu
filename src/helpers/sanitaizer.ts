export const sanitizeInput = (value = "") => {
  return value
    .replace(/<[^>]*>/g, "")   // remove HTML tags
    .replace(/\u00A0/g, " ");  // allow normal spaces
};
export const escapeHtml = (value = "") => {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
};
export const sanitizeAlphanumeric = (value = "") => {
    return value.replace(/[^a-zA-Z0-9]/g, "");
};
export const sanitizeNumber = (value = "") => {
    return value.replace(/[^0-9]/g, "");
};
export const sanitizeEmail = (value = "") => {
    return value
        .replace(/[^a-zA-Z0-9@._-]/g, "")
        .toLowerCase();
};
export const sanitizePassword = (value = "") => {
    return value.replace(/\s/g, "");
};
