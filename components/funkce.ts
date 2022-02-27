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

const hashPassword = (password: string, salt: string): string => {
    const hash = createHash('sha512');
    hash.update(password);
    hash.update(salt);
    return hash.digest('hex');
};

export const newHashPassword = (password: string) => {
    const salt = randomBytes(256).toString('hex');
    const hash = hashPassword(password, salt);
    return {
        hash: hash,
        salt: salt,
    };
};

export const checkPasswordHash = (password: string, hash: string, salt: string): boolean => {
    const passwordHash = hashPassword(password, salt);
    return hash == passwordHash ? true : false;
};

// export const hashPassword = (password: string): string => {
//     pbkdf2(password, 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//         if (err) throw err;
//         console.log(derivedKey.toString('hex'));
//     });

//     return '';
// };
