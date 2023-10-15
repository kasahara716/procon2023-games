'use client';

import { Box, useMediaQuery } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

type Props = {
    scores: {
        wall_score: number;
        territory_score: number;
        castle_score: number;
    }[][];
    turn: number;
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

export default function Graph({ scores, turn }: Props) {
    const options = {
        responsive: true,
    };

    const data = {
        labels: Array(scores.length + 1)
            .fill(0)
            .map((_, i) => {
                return i + '';
            }),
        datasets: [
            {
                label: 'Player1',
                data: scores
                    .filter((_, i) => {
                        return i <= turn;
                    })
                    .map((score) => {
                        return (
                            score[0].castle_score +
                            score[0].territory_score +
                            score[0].wall_score
                        );
                    }),
                borderColor: 'rgb(0, 0, 255)',
            },
            {
                label: 'Player2',
                data: scores
                    .filter((_, i) => {
                        return i <= turn;
                    })
                    .map((score) => {
                        return (
                            score[1].castle_score +
                            score[1].territory_score +
                            score[1].wall_score
                        );
                    }),
                borderColor: 'rgb(255, 0, 0)',
            },
        ],
    };
    return (
        <Box>
            <Line options={options} data={data} />
        </Box>
    );
}
