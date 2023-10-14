import { Box, Container, Typography } from '@mui/material';
import { getMatcheIds, getMatches } from '../../lib/logs';
import Link from 'next/link';

export default function Page() {
    const matches = getMatches();
    const matchIds = getMatcheIds();

    return (
        <Container>
            <Box>Matches</Box>
            {matchIds.map((matchIdStr) => {
                const matchId = parseInt(matchIdStr);
                return (
                    <p>
                        <Link href={`/logs/${matchId}`}>
                            {matchId} : {matches[matchId].name} :{' '}
                            {matches[matchId].player1} vs{' '}
                            {matches[matchId].player2}
                        </Link>
                    </p>
                );
            })}
        </Container>
    );
}
