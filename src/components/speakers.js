import { data } from './../../SpeakerData';
import Header from './header';
import SpeakerList from './SpeakerList';
import SpeakersToolbar from './SpeakersToolbar';
import { useState } from 'react';

function Speakers()
{
    const [theme, setTheme] = useState("light");
    return (
        <div className={theme === "light" ? "container-fluid light": "contaniner-fluid dark"}>
            <Header  theme={theme}/>
            <SpeakersToolbar theme={theme} setTheme={setTheme} /> 
            <SpeakerList data={data} />
        </div>
        
    )
}

export default Speakers;