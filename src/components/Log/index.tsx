'use client';

import { Box, Grid, Slider } from '@mui/material';
import { MatchData } from '../../lib/logs';
import { useState } from 'react';
import Field from '../Field';
import Player from '../Player';
import Link from 'next/link';

type Props = {
    matchData: MatchData;
    mapData: string[][];
};

export default function Log({ matchData, mapData }: Props) {
    const [turn, setTurn] = useState<number>(0);
    const maxTurn = matchData.turns.length - 1;

    console.log();

    const handleChangeSlider = (event: Event, value: number | number[]) => {
        if (typeof value === 'number') {
            setTurn(value);
        }
    };

    return (
        <>
            <Grid container>
                <Grid item md={6}>
                    <Player
                        number={1}
                        name={matchData.player1}
                        score={matchData.turns[turn].scores[0]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Player
                        number={2}
                        name={matchData.player2}
                        score={matchData.turns[turn].scores[1]}
                    />
                </Grid>
            </Grid>
            <Box>
                {turn} / {maxTurn}
            </Box>
            <Box>
                <Slider
                    size="medium"
                    step={1}
                    max={maxTurn}
                    value={turn}
                    onChange={handleChangeSlider}
                />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Field
                    mapData={mapData}
                    masons={matchData.turns[turn].board.masons}
                    territories={matchData.turns[turn].board.territories}
                    walls={matchData.turns[turn].board.walls}
                />
            </Box>
        </>
    );
}
