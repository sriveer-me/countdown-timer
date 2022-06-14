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

export function refreshEndTime()
{
    endTime = new Date().setDate(new Date().getDate() + 14);
}