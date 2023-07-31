import { useState, useEffect  } from 'react';


type Props = {
    url?: string | null;
    setState: (value: any) => void;
}

function useFetch(props: Props) {
    const [loading, setLoading] = useState<boolean>(props.url ? true : false);
    const [message, setMessage] = useState<null | { status: number, text: string }>(null);
    const [url, setUrl] = useState<null | string | undefined>(props.url);

    useEffect(() => {

        const sendRequest = async (url:string): Promise<void> => {
            setLoading(true);
            try {
                const req = await fetch(url);

                const res = await req.json();

                if (res && res.ok) {
                    props.setState(res.data);
                }
            } catch (err: any) {

                setMessage({ status: err.status, text: err.message });

            } finally {
                setUrl(null);
                setLoading(false);
            }
        }
        if (url) {
            setMessage(null);
            sendRequest(url);
        }
    }, [url, loading, message, setLoading])
    return {
        loading,
        setUrl,
        message,
        setLoading,
        setMessage,
    }
}
export default useFetch;