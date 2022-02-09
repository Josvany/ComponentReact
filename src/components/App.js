import { data } from '../../SpeakerData';
import Header from './header';
import { useState } from 'react';
import Speakers from './speakers';

function App()
{
    const [theme, setTheme] = useState("light");
    return (
        <div className={theme === "light" ? "container-fluid light": "contaniner-fluid dark"}>
            <Header  theme={theme}/>
            <Speakers data={data} theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default App;