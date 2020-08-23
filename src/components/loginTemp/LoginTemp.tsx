import React, {useRef} from "react";

type LoginTempPropsType = {
    login: (login: string | null, password: string | null, rememberMe: boolean | null) => void;
}
export const LoginTemp = (props: LoginTempPropsType) => {
    let loginRef = useRef<HTMLInputElement>(null);
    let passwordRef = useRef<HTMLInputElement>(null);
    let rememberMeRef = useRef<HTMLInputElement>(null);

    const login = () => {
        props.login && props.login(loginRef.current && loginRef.current.value,
            passwordRef.current && passwordRef.current.value,
            rememberMeRef.current && rememberMeRef.current.checked);
    }

    return (<div>
        <div><input type="text"/></div>
        <div><input type="password"/></div>
        <div><input type="checkbox"/></div>
        <div>
            <button onClick={login}>Login</button>
        </div>
    </div>);
}