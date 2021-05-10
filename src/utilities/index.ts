export function getTimeInfoFromTimestamp(timestamp: number) {
  const date = new Date(timestamp);

  const timeString = date.toTimeString();
  const [time, timezone] = timeString.split(' ')
  
  return {
    time,
    timezone: timezone.split('-')[0]
  }
}
