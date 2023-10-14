import fs from 'fs';

export function getMaps() {
    const files = fs.readdirSync('./fielddata');

    return files
        .filter((file) => {
            return file.endsWith('.csv');
        })
        .map((file) => {
            return file.substring(0, file.length - 4);
        });
}

export function getMapData(id: string): string[][] {
    const mapDataStr = fs.readFileSync(`./fielddata/${id}.csv`, 'utf-8');

    return mapDataStr.split('\r\n').map((line) => {
        return line.split(',');
    });
}
