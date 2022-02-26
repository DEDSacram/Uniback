// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import hash from 'object-hash';

let b: any = [];

type Data = {
    username: string;
    password: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    //Pull from Db
    const x = hash(req.body.password);
    if (b.includes(x)) {
        res.status(200).json({ username: '', password: 'true' });
    } else {
        b.push(x);
        res.status(404).json({ username: '', password: 'false' });
    }
}
