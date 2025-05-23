import theme from '@/theme';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from "next";
import { SidebarProvider } from './contexts/sidebarContext';
import "./globals.css";
import StoreProvider from './providers/StoreProvider';


export const metadata: Metadata = {
  title: "Appointment Management",
  description: "Appointment Management App from Configural.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StoreProvider>
              <SidebarProvider>
                {children}
              </SidebarProvider>
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
