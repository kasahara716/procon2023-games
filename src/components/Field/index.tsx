import { Box, useMediaQuery } from '@mui/material';
import Cell from '../Cell';

type Props = {
    mapData: string[][];
    masons?: number[][];
    walls?: number[][];
    territories?: number[][];
};

export default function Field({ mapData, masons, walls, territories }: Props) {
    return (
        <Box>
            {mapData.map((line, i) => {
                if (line.length === 1) {
                    return undefined;
                }
                return (
                    <Box
                        style={{ margin: 0, padding: 0, lineHeight: 0 }}
                        key={i}
                    >
                        {line.map((cell, j) => {
                            return (
                                <Cell
                                    value={
                                        cell === 'a' || cell === 'b'
                                            ? '0'
                                            : (cell as '0' | '1' | '2')
                                    }
                                    syokunin={
                                        masons === undefined
                                            ? cell === 'a' || cell === 'b'
                                                ? cell
                                                : undefined
                                            : masons[i][j] > 0
                                            ? 'a'
                                            : masons[i][j] < 0
                                            ? 'b'
                                            : undefined
                                    }
                                    zyouheki={
                                        walls !== undefined
                                            ? walls[i][j] === 1
                                                ? 'a'
                                                : walls[i][j] === 2
                                                ? 'b'
                                                : undefined
                                            : undefined
                                    }
                                    zinti={
                                        territories !== undefined
                                            ? territories[i][j] === 1
                                                ? 'a'
                                                : territories[i][j] === 2
                                                ? 'b'
                                                : territories[i][j] === 3
                                                ? 'c'
                                                : undefined
                                            : undefined
                                    }
                                    key={`${i}_${j}`}
                                    width={line.length}
                                />
                            );
                        })}
                    </Box>
                );
            })}
        </Box>
    );
}
