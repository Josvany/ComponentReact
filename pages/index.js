import { data } from "../SpeakerData"
import Speaker from "../src/components/speakers";

const indexPage = () =>
{
    // const {id, bio, first, last, company, favorite, twitterHandle, sessions } = data[0];
    return (
        <div className="container speakers-list">
            <div className="row">
                {data.map(function(speaker){
                    return (
                        <Speaker key={speaker.id} speaker={speaker} />
                    )
                })}

                
            </div>
        </div>
    );
    
}

export default indexPage;