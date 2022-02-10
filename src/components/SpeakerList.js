import Speaker from './Speaker';
import { data } from '../../SpeakerData';
import { useState, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder/lib';

function SpeakerList({showSessions})
{
    const [speakersData, setSpeakersData] = useState([]);
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const[isLoading, setIsLoading] = useState(true);
    const[hasError, setHasError] = useState(false);
    const[error, setError] = [""];


    useEffect(() => {
      async function delayFunc()
      {
        try {
          await delay(2000);
          setIsLoading(false);
          setSpeakersData(data);
        } catch (e) {
          setIsLoading(false);
          setHasError(true);
          setError(e);
        }
        
      }
      delayFunc();
    });

    function onFavoriteToggle(id) {
        const speakersRecPrevious = speakersData.find(function (rec) {
          return rec.id === id;
        });
        const speakerRecUpdated = {
          ...speakersRecPrevious,
          favorite: !speakersRecPrevious.favorite,
        };
        const speakersDataNew = speakersData.map(function (rec) {
          return rec.id === id ? speakerRecUpdated : rec;
        });
    
        setSpeakersData(speakersDataNew);
      }

      if (hasError === true) {
        return (
          <div className='text-Danger'>
            Error: <b>Loading Speaker Failed {error}</b>
          </div>
        )
      }

      // if(isLoading === true) return <div>Loading...</div>

    return (
      <ReactPlaceholder type="media" rows={15} className="speakersList-placeholder" ready={isLoading === false}>
          <div className="container speakers-list">
              <div className="row">
                  {speakersData.map(function(speaker){
                      return (
                          <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions}
                                  onFavoriteToggle={() => {
                                      onFavoriteToggle(speaker.id)
                                  }} />
                      )
                  })}
              </div>
          </div>
        </ReactPlaceholder>
    )
}

export default SpeakerList;