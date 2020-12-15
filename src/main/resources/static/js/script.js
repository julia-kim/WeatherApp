var images = [
  // DEFAULT
  {
    url: "1429081271179-49f13a9d4d99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    condition: ["clear sky"],
    url: "1557637675-2149a5295fb7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
  },
  // MISTY / SMOKY
  {
    condition: ["mist", "Smoke", "Haze", "sand/ dust whirls", "fog", "sand", "dust", "volcanic ash", "squalls", "tornado"],
    url: "1607398435386-9f28012aabb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  // THUNDERSTORM
  {
    condition: [
      "thunderstorm with light rain",
      "thunderstorm with rain",
      "thunderstorm with heavy rain",
      "light thunderstorm",
      "thunderstorm",
      "heavy thunderstorm",
      "ragged thunderstorm",
      "thunderstorm with light drizzle",
      "thunderstorm with drizzle",
      "thunderstorm with heavy drizzle",
    ],
    url: "1500056764219-19f5e4f8f9f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  // DRIZZLE
  {
    condition: [
      "light intensity drizzle",
      "drizzle",
      "heavy intensity drizzle",
      "light intensity drizzle rain",
      "drizzle rain",
      "heavy intensity drizzle rain",
      "shower rain and drizzle",
      "heavy shower rain and drizzle",
      "shower drizzle",
    ],
    url: "1486016006115-74a41448aea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80",
  },
  // RAIN
  {
    condition: [
      "light rain",
      "moderate rain",
      "heavy intensity rain",
      "very heavy rain",
      "extreme rain",
      "freezing rain",
      "light intensity shower rain",
      "shower rain",
      "heavy intensity shower rain",
      "ragged shower rain",
    ],
    url: "1468476396571-4d6f2a427ee7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1444&q=80",
  },
  // SNOW
  {
    condition: [
      "light snow",
      "Snow",
      "Heavy snow",
      "Sleet",
      "Light shower sleet",
      "Shower sleet",
      "Light rain and snow",
      "Rain and snow",
      "Light shower snow",
      "Shower snow",
      "Heavy shower snow",
    ],
    url: "1517299321609-52687d1bc55a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  // CLOUDY
  {
    condition: ["few clouds", "scattered clouds", "broken clouds", "overcast clouds"],
    url: "1469365556835-3da3db4c253b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
]

function unsplash() {
  var url
  var weatherType = document.querySelector("#weather-condition").innerHTML
  for (var i in images) {
    if (!images[i]["condition"] || images[i]["condition"].indexOf(weatherType) > -1) {
      url = images[i]["url"]
    }
  }
  document.querySelector("#app").style.backgroundImage = "url(https://images.unsplash.com/photo-" + url + ")"
}

unsplash()
