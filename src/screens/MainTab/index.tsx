import React from 'react';
import TabComponent from '../../components/TabComponent';
// @ts-ignore 
import Me from '../../../assets/icons/tab/me.svg'
// @ts-ignore 
import Messages from '../../../assets/icons/tab/messages.svg'
// @ts-ignore 
import Program from '../../../assets/icons/tab/program.svg'
// @ts-ignore 
import Thoughts from '../../../assets/icons/tab/thoughts.svg'
import { DISPLAY_TEXT } from '../../common/constants';
import ThoughtTabSection from '../ThoughtTabSection';

const MainTab = () => (
    <TabComponent
        tabs={[
            {
                text: DISPLAY_TEXT.TABS.MESSAGES,
                icon: (colorFill?: string) => <Messages width={90} height={30} fill={colorFill} />
            },
            {
                text: DISPLAY_TEXT.TABS.PROGRAM,
                icon: (colorFill?: string) => <Program width={90} height={30} fill={colorFill} />
            },
            {
                text: DISPLAY_TEXT.TABS.THOUGHTS,
                icon: (colorFill?: string) => <Thoughts width={90} height={30} fill={colorFill} />,
                tabContent: ThoughtTabSection
            },
            {
                text: DISPLAY_TEXT.TABS.ME,
                icon: (colorFill?: string) => <Me width={90} height={30} fill={colorFill} />
            }
        ]}
    />
);

export default MainTab;