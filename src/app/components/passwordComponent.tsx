import { Box, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import TextBox from "../lib/TextBox";

type PasswordComponentProps = {
    passwordType: "password" | "otp";
    password: string;
    callback: (value: string) => void;
    helperText?: string;
};


function PasswordComponent({ passwordType, password, helperText, callback }: PasswordComponentProps) {
    if (passwordType === "password") {
        return <Box display="flex" flexDirection="column">
            <Box>
                <TextBox
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => callback(e.target.value)}
                    fullWidth
                    sx={{ width: "480px" }}
                />
            </Box>
            <Typography variant="body2" color="error" sx={{
                height: helperText ? '20px' : 0,
                opacity: helperText ? 1 : 0,
                transition: 'all 0.3s ease',
                overflow: 'hidden',
            }}>
                {helperText}
            </Typography>
        </Box>
    }

    if (passwordType === "otp") {
        return <Box display="flex" flexDirection="column">
            <MuiOtpInput
                length={6}
                onChange={callback}
                value={password}
                validateChar={(char) => {
                    return !new RegExp('[^0-9]').test(char)
                }}
                sx={{
                    '& input': {
                        width: "42px",
                        height: "42px",
                        padding: { xs: '6px' },
                        fontSize: { xs: '16px' },
                        textAlign: 'center',
                    },
                }}
            />
            <Typography variant="body2" color="error" sx={{
                height: helperText ? '20px' : 0,
                opacity: helperText ? 1 : 0,
                transition: 'all 0.3s ease',
                overflow: 'hidden',
            }}>
                {helperText}
            </Typography>
        </Box>
    }

    return <></>
}

export default PasswordComponent;