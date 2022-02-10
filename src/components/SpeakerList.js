import Speaker from './Speaker';
import ReactPlaceholder from 'react-placeholder/lib';
import useRequestSpeakers from './../hooks/useRequestSpeakers';

function SpeakerList({showSessions})
{

    const { speakersData, isLoading, hasError,
      error, onFavoriteToggle
    } = useRequestSpeakers(2000);

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