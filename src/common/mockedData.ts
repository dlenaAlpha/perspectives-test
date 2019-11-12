import { Thought, Mood } from './model'

export const mockedThoughList: Thought[] = [
    {
        id: 1,
        title: 'I need to think more what the other person is feeling',
        explanation: 'Yes, Bill was very rude with me',
        mood: Mood.VERY_SAD,
        createdUTC: 1544372565000
    },
    {
        id: 2,
        title: 'I need to think more what the other person is feeling',
        explanation: 'Yes, Bill was very rude with me',
        mood: Mood.SAD,
        createdUTC: 1544373265000
    },
    {
        id: 3,
        title: 'I need to think more what the other person is feeling',
        explanation: 'Yes, Bill was very rude with me',
        mood: Mood.FINE,
        createdUTC: 1544381965000
    }
]