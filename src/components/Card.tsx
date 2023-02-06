import React, {FC, PropsWithChildren, useState} from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<PropsWithChildren<CardProps>> =
    ({
         width,
         height,
         variant,
         onClick,
         children
     }) => {

        const [value, setValue] = useState<number>(0)

        const clickHandler = () => {
            setValue(prev => prev + 1)
            onClick(value)
        }

        return (
            <div
                style={{
                    width,
                    height,
                    backgroundColor: 'gray',
                    border: variant === CardVariant.outlined ? '1px solid red' : 'none',
                    background: variant === CardVariant.primary ? 'aquamarine' : 'gray'
                }}
                onClick={clickHandler}
            >
                {children}
            </div>
        );
    };

export default Card;
