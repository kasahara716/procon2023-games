'use client';

import Image from 'next/image';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from '@mui/material';

import Player1Img from './player1.svg';
import Player2Img from './player2.svg';
import ShiroImg from './shiro.svg';
import ZintiPlayer1Img from './zinti_player1.svg';
import ZintiPlayer2Img from './zinti_player2.svg';
import ZyouhekiPlayer1Img from './zyouheki_player1.svg';
import ZyouhekiPlayer2Img from './zyouheki_player2.svg';

type Props = {
    number: number;
    name: string;
    score: {
        wall_score: number;
        territory_score: number;
        castle_score: number;
    };
};

export default function Player({ number, name, score }: Props) {
    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Image
                            src={number === 1 ? Player1Img : Player2Img}
                            width={48}
                            height={48}
                            alt="player"
                        />
                    }
                    title={
                        <Typography sx={{ fontSize: '1.2em' }}>
                            {name}
                        </Typography>
                    }
                    subheader={`Player${number}`}
                />
                <CardContent>
                    <Box>
                        <List>
                            <ListItem
                                secondaryAction={
                                    <Typography>
                                        {score.castle_score}
                                    </Typography>
                                }
                            >
                                <ListItemAvatar>
                                    <Image
                                        src={ShiroImg}
                                        width={32}
                                        height={32}
                                        alt="shiro"
                                    />
                                </ListItemAvatar>
                                <ListItemText>城ポイント</ListItemText>
                            </ListItem>
                            <ListItem
                                secondaryAction={
                                    <Typography>
                                        {score.territory_score}
                                    </Typography>
                                }
                            >
                                <ListItemAvatar>
                                    <Image
                                        src={
                                            number === 1
                                                ? ZintiPlayer1Img
                                                : ZintiPlayer2Img
                                        }
                                        width={32}
                                        height={32}
                                        alt="zinti"
                                    />
                                </ListItemAvatar>
                                <ListItemText>陣地ポイント</ListItemText>
                            </ListItem>
                            <ListItem
                                secondaryAction={
                                    <Typography>{score.wall_score}</Typography>
                                }
                            >
                                <ListItemAvatar>
                                    <Image
                                        src={
                                            number === 1
                                                ? ZyouhekiPlayer1Img
                                                : ZyouhekiPlayer2Img
                                        }
                                        width={32}
                                        height={32}
                                        alt="zinti"
                                    />
                                </ListItemAvatar>
                                <ListItemText>城壁ポイント</ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem
                                secondaryAction={
                                    <Typography>
                                        {score.castle_score +
                                            score.territory_score +
                                            score.wall_score}
                                    </Typography>
                                }
                            >
                                <ListItemText>トータルポイント</ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
