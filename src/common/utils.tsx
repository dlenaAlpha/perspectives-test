import moment from 'moment';
import React from 'react';
// @ts-ignore 
import Sad from '../../assets/icons/moods/sad.svg'
// @ts-ignore 
import VerySad from '../../assets/icons/moods/very_sad.svg'
// @ts-ignore 
import Fine from '../../assets/icons/moods/fine.svg'
// @ts-ignore 
import Good from '../../assets/icons/moods/good.svg'
// @ts-ignore 
import Happy from '../../assets/icons/moods/happy.svg'
import { Mood } from './model'

const staticHeight = 40;

export const moodToIcon = (mood: Mood, colorFill?: string): JSX.Element => {
    switch (mood) {
        case Mood.VERY_SAD:
            return <VerySad height={staticHeight} fill={colorFill} />
        case Mood.SAD:
            return <Sad height={staticHeight} fill={colorFill} />
        case Mood.FINE:
            return <Fine height={staticHeight} fill={colorFill} />
        case Mood.GOOD:
            return <Good height={staticHeight} fill={colorFill} />
        case Mood.HAPPY:
            return <Happy height={staticHeight} fill={colorFill} />
        default:
            return <Sad height={staticHeight} fill={colorFill} />
    }
}

export const unixDateToString = (dateMillis: number): string =>
    moment(dateMillis).format('MMMM Do, YYYY   h:mm a');