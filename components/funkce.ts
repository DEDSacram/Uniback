import { createHash, randomBytes } from 'crypto';

const twoOrMoreWhiteSpace = /\s{2,}/gm;

export const sanitizeString = (text: string): string => {
    return text.normalize().trim().replace(twoOrMoreWhiteSpace, ' ');
};

export const checkPassword = (password: string): boolean => {
    return password.length >= 8 && password.match(/\d/) && password.match(/[A-Z]/) && password.match(/[a-z]/)
        ? true
        : false;
};

const hashPassword = (password: string, salt: string, algorithm: string, rounds: number): string => {
    let tempHash = password + salt;

    for (let i = 1; i <= rounds; i++) {
        const hash = createHash(algorithm);
        hash.update(tempHash);
        tempHash = hash.digest('hex');
    }

    return tempHash;
};

export const newHashPassword = (password: string, algorithm: string, rounds: number) => {
    const salt = randomBytes(256).toString('hex');
    const hash = hashPassword(password, salt, algorithm, rounds);
    return {
        hash: hash,
        salt: salt,
    };
};
