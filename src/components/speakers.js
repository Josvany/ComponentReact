import SpeakerList from './SpeakerList';
import SpeakersToolbar from './SpeakersToolbar';
import { useState } from "react";


function Speakers({data, theme, setTheme})
{
    const [showSessions, setShowSessions] = useState(true);

    return (
        <>
            <SpeakersToolbar theme={theme} showSessions={showSessions} setShowSessions={setShowSessions} setTheme={setTheme} />
            <SpeakerList showSessions={showSessions} data={data} />
        </>
    )
}

export default Speakers;