import fs from 'fs';

export type MatchData = {
    matchId: number;
    turns: Turn[];
    map: string;
    name: string;
    player1: string;
    player2: string;
};

const matches: {
    [key in number]: MatchData;
} = {};

type Turn = {
    turn: number;
    board: {
        masons: number[][];
        walls: number[][];
        territories: number[][];
    };
    scores: {
        wall_score: number;
        territory_score: number;
        castle_score: number;
    }[];
};

type Matche = {
    match_id: number;
    turns: Turn[];
};

export function getMatches() {
    const files = fs.readdirSync('./logdata');

    // 2回目以降はメモリから取る
    if (Object.keys(matches).length === 0) {
        files.forEach((file) => {
            if (file.endsWith('.json')) {
                const fileStr = fs.readFileSync(`./logdata/${file}`, 'utf-8');
                const data = JSON.parse(fileStr) as Matche[];
                data.forEach((match) => {
                    matches[match.match_id] = {
                        matchId: match.match_id,
                        turns: match.turns,
                        map: '',
                        name: '',
                        player1: '',
                        player2: '',
                    };
                });
            }
        });
        const matchesStr = fs.readFileSync(`./logdata/matches.txt`, 'utf-8');
        matchesStr.split('\n').forEach((line) => {
            const matchData = line.split('|');
            const matchId = parseInt(matchData[4]);
            matches[matchId].map = matchData[1];
            matches[matchId].name = matchData[0];
            matches[matchId].player1 = matchData[2];
            matches[matchId].player2 = matchData[3];
        });
    }

    return matches;
}

export function getMatcheIds() {
    const matches = getMatches();

    return Object.keys(matches);
}

export function getMatchData(matchId: number) {
    const matches = getMatches();

    return matches[matchId];
}
