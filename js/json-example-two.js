const days= [
        {  
            "temperature": 36,
            "status": "fine"
        },
        {  
            "temperature": 25,
            "status": "good"
        }
    ]

const temperatureSum = days.reduce((acc, current) => { return acc + current.temperature }, 0)
console.log(temperatureSum.toFixed(2))

/* const hotTemperature36 = days.filter((day) => { 
    return day.temperature.some(temperature => temperature > 35)
}) 

console.log(hotTemperature36) */
