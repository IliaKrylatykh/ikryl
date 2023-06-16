import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo(
	({ className, value, onChange, type = 'text', ...otherProps }) => {
		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target.value)
		}

		return (
			<div className={classNames(cls.Input, {}, [className])}>
				<input
					className={cls.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					{...otherProps}
				/>
			</div>
		)
	}
)
