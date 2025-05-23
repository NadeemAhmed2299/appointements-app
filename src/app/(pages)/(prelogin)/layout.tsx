import { Box, Paper } from "@mui/material";



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Box
            minHeight="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={2}
            sx={{ backgroundColor: '#7F56D9' }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: "100px",
                    maxWidth: '100%',
                    borderRadius: "24px"
                }}
            >
                {children}
            </Paper>
        </Box>
    )
}
