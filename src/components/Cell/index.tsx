'use client';

import Image from 'next/image';

import KusaImg from './kusa.svg';
import IkeImg from './ike.svg';
import ShiroImg from './shiro.svg';
import Player1Img from './player1.svg';
import Player2Img from './player2.svg';
import { useMediaQuery } from '@mui/material';
import theme from '../ThemeRegistry/theme';

type Props = {
    value: string;
    width: number;
};

export default function Cell({ value, width }: Props) {
    const isSM = useMediaQuery(theme.breakpoints.up('sm'));
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));
    let cellSize = 300 / width;
    if (isLG) {
        cellSize = 1000 / width;
    } else if (isMD) {
        cellSize = 800 / width;
    } else if (isSM) {
        cellSize = 500 / width;
    }

    return (
        <>
            <div style={{ display: 'inline' }}>
                {value === '1' && (
                    <Image
                        src={IkeImg}
                        width={cellSize}
                        height={cellSize}
                        alt="ike"
                    />
                )}
                {value === '2' && (
                    <Image
                        src={ShiroImg}
                        width={cellSize}
                        height={cellSize}
                        alt="shiro"
                        style={{ position: 'absolute' }}
                    />
                )}
                {value === 'a' && (
                    <Image
                        src={Player1Img}
                        width={cellSize}
                        height={cellSize}
                        alt="player1"
                        style={{ position: 'absolute' }}
                    />
                )}
                {value === 'b' && (
                    <Image
                        src={Player2Img}
                        width={cellSize}
                        height={cellSize}
                        alt="player2"
                        style={{ position: 'absolute' }}
                    />
                )}
                {value !== '1' && (
                    <Image
                        src={KusaImg}
                        width={cellSize}
                        height={cellSize}
                        alt="kusa"
                    />
                )}
            </div>
        </>
    );
}
