
interface Response {
    status: (code: number) => Response;
    json: (body: unknown) => void;
}

export default function handler(res: Response): void {
    // req = Request data (method, body, headers)
    // res = Response object (send data back)
    res.status(200).json({ message: 'Hello world!' });
}