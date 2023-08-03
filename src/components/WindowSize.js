import {useEffect, useRef, useState} from "react";

export default function WindowSize() {
    let [size, setSize] = useState(0);
    let ref = useRef();

    let resizeHandler = () => {
        let {clientWidth} = ref.current || {};
        setSize(clientWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () =>
            window.removeEventListener("resize", resizeHandler);
    }, []);
    return {size, ref};
}