'use client';

import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import theme from '../ThemeRegistry/theme';

import KusaImg from './kusa.svg';
import IkeImg from './ike.svg';
import ShiroImg from './shiro.svg';
import Player1Img from './player1.svg';
import Player2Img from './player2.svg';
import ZyouhekiPlayer1Img from './zyouheki_player1.svg';
import ZyouhekiPlayer2Img from './zyouheki_player2.svg';
import ZintiPlayer1Img from './zinti_player1.svg';
import ZintiPlayer2Img from './zinti_player2.svg';
import ZintiPlayer3Img from './zinti_player3.svg';

type Props = {
    /**
     * マスの状態
     * 0: 平地
     * 1: 池
     * 2: 城
     */
    value: '0' | '1' | '2';
    /**
     * a: 先手職人
     * b: 後手職人
     */
    syokunin?: 'a' | 'b';
    /**
     * a: 先手城壁
     * b: 後手城壁
     */
    zyouheki?: 'a' | 'b';
    /**
     * a: 先手陣地
     * b: 後手陣地
     * c: 両陣地
     */
    zinti?: 'a' | 'b' | 'c';
    width: number;
};

export default function Cell({
    value,
    syokunin,
    zyouheki,
    zinti,
    width,
}: Props) {
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
                {zinti === 'a' && (
                    <Image
                        src={ZintiPlayer1Img}
                        width={cellSize}
                        height={cellSize}
                        style={{
                            position: 'absolute',
                            zIndex: 20,
                        }}
                        alt="player1 area"
                    />
                )}
                {zinti === 'b' && (
                    <Image
                        src={ZintiPlayer2Img}
                        width={cellSize}
                        height={cellSize}
                        style={{
                            position: 'absolute',
                            zIndex: 20,
                        }}
                        alt="player2 area"
                    />
                )}
                {zinti === 'c' && (
                    <Image
                        src={ZintiPlayer3Img}
                        width={cellSize}
                        height={cellSize}
                        style={{
                            position: 'absolute',
                            zIndex: 20,
                        }}
                        alt="player3 area"
                    />
                )}
                {zyouheki === 'a' && (
                    <Image
                        src={ZyouhekiPlayer1Img}
                        width={cellSize}
                        height={cellSize}
                        style={{
                            position: 'absolute',
                            zIndex: 10,
                            opacity: 0.8,
                        }}
                        alt="player1 zyouheki"
                    />
                )}
                {zyouheki === 'b' && (
                    <Image
                        src={ZyouhekiPlayer2Img}
                        width={cellSize}
                        height={cellSize}
                        style={{
                            position: 'absolute',
                            zIndex: 10,
                            opacity: 0.8,
                        }}
                        alt="player2 zyouheki"
                    />
                )}
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
                {syokunin === 'a' && (
                    <Image
                        src={Player1Img}
                        width={cellSize}
                        height={cellSize}
                        alt="player1"
                        style={{ position: 'absolute', zIndex: 15 }}
                    />
                )}
                {syokunin === 'b' && (
                    <Image
                        src={Player2Img}
                        width={cellSize}
                        height={cellSize}
                        alt="player2"
                        style={{ position: 'absolute', zIndex: 15 }}
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
