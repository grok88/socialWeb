import React from "react";
import styles from "./FormsControls.module.css";
import {WrappedFieldMetaProps} from "redux-form";
type ElementParamsType = {
    meta:WrappedFieldMetaProps
}
// type ElemControlType = (params:ElementParamsType) => React.ReactNode

export const Element= (Element: any):React.FC<ElementParamsType>  => ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                <Element {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = Element('textarea');
export const Input = Element('input');

// export const Textarea = ({input, meta, ...props}: any) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
// export const Input = ({input, meta, ...props}: any) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
