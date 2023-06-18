import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const { username, password, isLoading, error } = useSelector(getLoginState)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch]
	)

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [username, password, dispatch])

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('Auth form')} theme={TextTheme.NORMAL} />
			{error && (
				<Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />
			)}
			<Input
				type='text'
				className={cls.input}
				placeholder={t('Username')}
				autoFocus
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				type='text'
				className={cls.input}
				placeholder={t('Password')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.loginBtn}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Log in')}
			</Button>
		</div>
	)
})
