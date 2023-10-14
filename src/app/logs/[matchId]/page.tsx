import { Box, Container, Grid, Slider } from '@mui/material';
import Link from 'next/link';
import { getMatchData, getMatcheIds } from '../../../lib/logs';
import Log from '../../../components/Log';
import { getMapData } from '../../../lib/maps';

export default function Page({ params }: { params: { matchId: string } }) {
    const matchData = getMatchData(parseInt(params.matchId));
    const mapData = getMapData(matchData.map);

    return (
        <Container>
            <Box>
                <Link href="/logs">一覧に戻る</Link>
            </Box>

            <Box>Matches {params.matchId}</Box>
            <Log matchData={matchData} mapData={mapData} />
        </Container>
    );
}

export async function generateStaticParams() {
    const matchIds = getMatcheIds();

    return matchIds.map((matchId) => {
        return { matchId };
    });
}
