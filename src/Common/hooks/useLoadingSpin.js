import { useState } from "react";
import Loading from "../Loading/Loading";

const useLoadingSpin = () => {
    const [loading, setLoading] = useState(false);
    return [
        loading ? <Loading /> : null,
        () => setLoading(true),
        () => setLoading(false)
    ]
};

export default useLoadingSpin;