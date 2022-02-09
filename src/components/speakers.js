import SpeakerList from './SpeakerList';
import SpeakersToolbar from './SpeakersToolbar';
import { useState } from "react";


function Speakers({theme, setTheme})
{
    const [showSessions, setShowSessions] = useState(true);

    return (
        <>
            <SpeakersToolbar theme={theme} showSessions={showSessions} setShowSessions={setShowSessions} setTheme={setTheme} />
            <SpeakerList showSessions={showSessions} />
        </>
    )
}

export default Speakers;