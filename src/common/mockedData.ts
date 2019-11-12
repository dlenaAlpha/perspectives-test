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
        title: 'I need to worry more about others',
        explanation: 'No. It is just a feeling',
        mood: Mood.SAD,
        createdUTC: 1544373265000
    },
    {
        id: 3,
        title: 'I think people usually like me',
        explanation: 'I met some new people the other day and they were really nice with me',
        mood: Mood.GOOD,
        createdUTC: 1544381965000
    }
]