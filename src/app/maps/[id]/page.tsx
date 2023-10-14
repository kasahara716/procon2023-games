import { Box, Container, Typography } from '@mui/material';
import { getMaps, getMapData } from '../../../lib/maps';
import Field from '../../../components/Field';

export default function Page({ params }: { params: { id: string } }) {
    const mapData = getMapData(params.id);
    return (
        <Container>
            <Box>
                <Typography>Maps {params.id}</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Field mapData={mapData} />
            </Box>
        </Container>
    );
}

export async function generateStaticParams() {
    const maps = getMaps();

    return maps.map((map) => {
        return { id: map };
    });
}
