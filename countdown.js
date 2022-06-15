let endTime = null;

module.exports = function getTimeRemaining()
{
  function routine(){
    if(endTime === null)
      refreshEndTime();

    const total = endTime - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  let timeRemaing = routine();
  if(timeRemaing.total < 1000)
  {
    endTime = null;
    timeRemaing = routine();
  }

  return timeRemaing;
};

function refreshEndTime()
{
    endTime = new Date().setDate(new Date().getDate() + 14);
    // endTime = new Date().setMinutes(new Date().getMinutes() + 1);
}