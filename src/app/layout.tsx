import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Analytics from '../components/Analytics';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import Link from 'next/link';

export const metadata = {
    title: '高専プロコン2023競技部門',
    description: '高専プロコン2023競技部門',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>
                <Analytics />
                <ThemeRegistry>
                    <AppBar>
                        <Toolbar>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '2em',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                                component={Link}
                                href="/"
                            >
                                高専プロコン2023
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            mt: ['48px', '56px', '64px'],
                            p: 3,
                            paddingLeft: 0,
                            paddingRight: 0,
                        }}
                    >
                        {children}
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
