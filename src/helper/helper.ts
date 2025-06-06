function isDigit(input: string){
  return /^[0-9]$/.test(input);
};


export function convertToValidNumber(input: string){
    if (isDigit(input)){
        return Number(input);
    }
    return input.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 10;
}

export function isValidPosition(position:number, boundry: number){
    return position < boundry && position > -1;
}

export const blockType = ["black","zero","one","two","three","four"];


export const directions: [number, number][] = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1],  // Right
];

export const wordToNumber: Record<string,number> = {
    "zero":0,
    "one":1,
    "two":2,
    "three":3,
    "four":4
};

export const ICONMAP: Record<string, string> = {
    "bulb": "💡",
    "_": "",
    "lit": "",
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4"
}