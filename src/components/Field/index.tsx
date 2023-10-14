import { Box, useMediaQuery } from '@mui/material';
import Cell from '../Cell';

type Props = {
    mapData: string[][];
};

export default function Field({ mapData }: Props) {
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
                                    value={cell}
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
