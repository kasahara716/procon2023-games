import { Box, Container, Typography } from '@mui/material';
import { getMaps } from '../lib/maps';

export default function Page() {
    const maps = getMaps();
    return (
        <Container>
            <Box>
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
