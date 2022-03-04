import { randomBytes, pbkdf2Sync } from 'crypto';

const twoOrMoreWhiteSpace = /\s{2,}/gm;

export const sanitizeString = (text: string): string => {
    return text.normalize().trim().replace(twoOrMoreWhiteSpace, ' ');
};

export const checkInput = (text: string): boolean => {
    return /^\w+$/.test(text);
};

export const checkPassword = (password: string): boolean => {
    return password.length >= 8 && password.match(/\d/) && password.match(/[A-Z]/) && password.match(/[a-z]/)
        ? true
        : false;
};

export const hashPassword = (
    password: string,
    salt: string,
    iterations: number,
    keylen: number,
    algorithm: string
): string => {
    return pbkdf2Sync(password, salt, iterations, keylen, algorithm).toString('hex');
};

export const newHashPassword = (password: string) => {
    const salt = randomBytes(16).toString('hex');
    const hash = hashPassword(password, salt, 10000, 64, 'sha512');
    return {
        hash: hash,
        salt: salt,
        iterations: 10000,
        keylen: 64,
        algorithm: 'sha512',
    };
};
