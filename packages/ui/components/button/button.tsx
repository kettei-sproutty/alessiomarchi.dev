"use client"
import React from 'react'
import clsx from 'clsx'

import type { FC, MouseEventHandler, ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './button.module.css'

export type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
    theme?: 'primary' | 'secondary' | 'error' | 'info'
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
    type = "button",
    theme = 'primary',
    onClick,
    children
}) => {

    return (
        <button
            type={type}
            className={clsx(styles['button'], styles[theme])}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button