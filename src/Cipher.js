export const encrypt = (text, shift) => {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
};

export const decrypt = (text, shift) => {
    return encrypt(text, 26 - shift);
};
