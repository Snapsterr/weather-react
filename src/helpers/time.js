const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const getLocalTime = (dt, timezone) => new Date((dt + timezone) * 1000)

export const time = {
  getEUTime: (dt, timezone, bool) => {
    return getLocalTime(dt, timezone).toLocaleString("en-GB", {
      hour: "2-digit",
      hour12: false,
      timeZone: "UTC",
      ...(bool && { minute: "2-digit" }),
    })
  },
  getUSTime: (dt, timezone, bool) => {
    return getLocalTime(dt, timezone).toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
      timeZone: "UTC",
      ...(bool && { minute: "numeric" }),
    })
  },
  getDay: (dt, timezone) => {
    let localTime = new Date((dt + timezone) * 1000)
    let currentDay = localTime.getUTCDay()
    return weekDay[currentDay]
  },
}
