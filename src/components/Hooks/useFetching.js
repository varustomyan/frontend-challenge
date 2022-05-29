import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(false)
            await callback()
        } catch (e) {
            // setError(e.message)
        } finally {
            setIsLoading(true)
        }
    }
    return [fetching, isLoading]
}