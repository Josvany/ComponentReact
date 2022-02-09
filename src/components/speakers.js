import { data } from './../../SpeakerData';
import Header from './header';
import SpeakerList from './SpeakerList';
import SpeakersToolbar from './SpeakersToolbar';

function Speakers()
{
    return (
        <div className="container-fluid">
            <Header />
            <SpeakersToolbar /> 
            <SpeakerList data={data} />
        </div>
        
    )
}

export default Speakers;