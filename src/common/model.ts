export interface Thought {
    id: number;
    title: string;
    explanation: string;
    mood: Mood;
    createdUTC: number;
};

export enum Mood {
    VERY_SAD,
    SAD,
    FINE,
    GOOD,
    HAPPY
}