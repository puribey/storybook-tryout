import * as React from 'react';

export interface Props {
    label: string;
}

function Button({ label }: Props) {
return (
    <button style={{background: "red"}}>
            {label}
    </button>
    );
}

export default Button;