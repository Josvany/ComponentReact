import Speaker from './Speaker';
import ReactPlaceholder from 'react-placeholder/lib';
import useRequestSpeakers, { REQUEST_STATUS } from './../hooks/useRequestSpeakers';


function SpeakerList({showSessions})
{

    const { speakersData, requestStatus,
      error, onFavoriteToggle
    } = useRequestSpeakers(1000);

      if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
          <div className='text-Danger'>
            Error: <b>Loading Speaker Failed {error}</b>
          </div>
        )
      }

      // if(isLoading === true) return <div>Loading...</div>

    return (
      <ReactPlaceholder type="media" rows={15} className="speakersList-placeholder" ready={requestStatus === REQUEST_STATUS.SUCCESS}>
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