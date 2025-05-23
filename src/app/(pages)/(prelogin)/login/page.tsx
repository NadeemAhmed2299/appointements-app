"use client";

import PasswordComponent from '@/app/components/passwordComponent';
import { default as TextBox } from '@/app/lib/TextBox';
import { isValidEmail, isValidPassword, isValidUSAPhoneNumber } from '@/app/utils/util';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Button, Stack, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import { Fragment, useState } from 'react';

const passwordRules = `
• At least 8 characters
• One uppercase letter
• One lowercase letter
• One number
• One special character
`;


const Page = () => {
	const [accountId, setAccountId] = useState('');
	const [password, setPassword] = useState('');
	const [passwordType, setPasswordType] = useState<'otp' | 'password' | ''>('');
	const [error, setError] = useState('');

	const handlePasswordComponentCallback = (value: string) => {
		setPassword(value)
	}

	const passwordTooltip = <div>{passwordRules.split('\n').map((line, i) => (
		<Typography key={i} variant="body2">{line}</Typography>
	))}</div>

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		if (!accountId || !accountId.trim()) {
			setError('Please provide email or phone number');
			return;
		}

		if (password && password.trim()) {
			if (isValidPassword(password)) {
				alert('Logging in with:' + JSON.stringify({ accountId, password }));
			} else {
				setError('Please provide valid password');
			}
			return;
		}

		if (isValidEmail(accountId)) {
			setPasswordType("password")
			return
		}

		if (isValidUSAPhoneNumber(accountId)) {
			setPasswordType("otp")
			return
		}
	};

	return (
		<Fragment>
			<Typography variant="h4" gutterBottom textAlign="center">
				{passwordType === 'otp' ? 'OTP Code Verification' : 'Login to Account'}
			</Typography>
			<Typography sx={{ mb: 3, opacity: "0.8", fontSize: '18px' }} textAlign="center">
				{passwordType === 'otp' ?
					<Fragment>Code has been send to <br /> <b>{accountId}</b></Fragment>
					: passwordType === 'password' ?
						<Fragment>Please enter your password
							<Tooltip
								title={passwordTooltip}
								placement="right"
								arrow
							>
								<InfoOutlinedIcon sx={{ fontSize: '14px', mr: 0.5, position: 'relative', bottom: '6px' }} />
							</Tooltip>
							to continue
						</Fragment>
						:
						<Fragment>Please enter your email or phone number to continue</Fragment>
				}
			</Typography>

			<form onSubmit={handleLogin}>
				<Stack spacing={2} alignItems={"center"}>
					{passwordType ?
						<Fragment>
							<PasswordComponent helperText={error} passwordType={passwordType} callback={handlePasswordComponentCallback} password={password} />
							<Button size='large' sx={{ width: "420px" }} type="submit" variant="contained" disableElevation fullWidth>
								Login
							</Button>
						</Fragment>
						:
						<Fragment>
							<TextBox
								label="Email ID/Phone Number"
								name="accountId"
								type="text"
								value={accountId}
								onChange={(e) => setAccountId(e.target.value)}
								fullWidth
								sx={{ width: "480px" }}
								helperText={error}
							/>
							<Button size='large' sx={{ width: "420px" }} type="submit" variant="contained" disableElevation fullWidth>
								Continue
							</Button>
						</Fragment>
					}

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography sx={{ opacity: "0.8", pr: 0.5 }}>Don&apos;t have an account?</Typography>
						<Button component={Link} href="/signup" variant="text">
							Create Account
						</Button>
					</Box>
				</Stack>
			</form>
		</Fragment>
	);
};

export default Page;