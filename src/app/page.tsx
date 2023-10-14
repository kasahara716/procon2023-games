import { Box, Container, Typography } from '@mui/material';
import { getMaps } from '../lib/maps';
import Link from 'next/link';

export default function Page() {
    const maps = getMaps();
    return (
        <Container>
            <Box>
                <Link href="/logs">
                    <Typography variant="h4" component="h2">
                        過去の対戦データ
                    </Typography>
                </Link>
            </Box>
            <Box>
                <Typography variant="h4" component="h2">
                    マップ一覧
                </Typography>
                {maps.map((map) => {
                    return (
                        <p key={map}>
                            <a href={`/maps/${map}`}>{map}</a>
                        </p>
                    );
                })}
            </Box>
        </Container>
    );
}
