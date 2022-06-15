let endTime = null;

export function getTimeRemaining()
{
  if(endTime === null)
    refreshEndTime();

  const total = endTime - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );
  
  if(total === 0)
    endTime = null;

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function refreshEndTime()
{
    endTime = new Date().setDate(new Date().getDate() + 14);
}

export function setEndTime(timeRemaing)
{
    let test = new Date().getTime() + timeRemaing;
    // console.log(timeRemaing);
    endTime = new Date().setTime(new Date().getTime() + timeRemaing);
    console.log(endTime);
}