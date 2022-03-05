import { FormEvent } from 'react';
import { Button } from './styledComp';

export default function LoginForm({ errorMessage, onSubmit }: { errorMessage: string; onSubmit: (e: FormEvent<HTMLFormElement>) => void }) {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input id="username" name="username" placeholder="Přezdívka" required />
            </div>

            <div>
                <input id="password" name="password" placeholder="Heslo" type="password" required />
            </div>
            <Button type="submit">Login</Button>

            {errorMessage && <p className="error">{errorMessage}</p>}
            <style jsx>{`
                form,
                label {
                    display: flex;
                    flex-flow: column;
                }
                label > span {
                    font-weight: 600;
                }
                input {
                    padding: 8px;
                    margin: 0.3rem 0 1rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .error {
                    color: brown;
                    margin: 1rem 0 0;
                }
            `}</style>
        </form>
    );
}
