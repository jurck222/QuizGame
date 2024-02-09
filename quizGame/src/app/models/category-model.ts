export interface category{
    category: string,
    questions: question[]
};

export interface question{
    clue : string,
    answer: string,
    value: number
};