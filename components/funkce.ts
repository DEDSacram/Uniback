import { randomBytes, pbkdf2Sync } from 'crypto';

const twoOrMoreWhiteSpace = /\s{2,}/gm;

export const sanitizeString = (text: string): string => {
    return text.normalize().trim().replace(twoOrMoreWhiteSpace, ' ');
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
    return pbkdf2Sync(password, salt, iterations, keylen, algorithm).toString();
};

export const newHashPassword = (password: string, iterations: number, keylen: number, algorithm: string) => {
    const salt = randomBytes(256).toString('hex');
    const hash = hashPassword(password, salt, iterations, keylen, algorithm);
    return {
        hash: hash,
        salt: salt,
    };
};
