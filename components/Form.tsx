import { FormEvent } from 'react';
import Button from './Buttom';

export default function LoginForm({
    errorMessage,
    onSubmit,
}: {
    errorMessage: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
    return (
        <form onSubmit={onSubmit} className="d-flex flex-column">
            <div className="mb-3">
                <input
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Přezdívka"
                    aria-describedby="usernameHelp"
                    required
                />
            </div>

            <div className="mb-3">
                <input
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Heslo"
                    type="password"
                    required
                />
            </div>
            <Button type="submit" className="btn btn-primary sm-auto">
                Login
            </Button>

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
