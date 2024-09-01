// src/services/weather.js
const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '18afffda36msh8303eae10efd6b5p1210c2jsn14e09d5a46d6'
    }
};

export async function getWeatherFrom(query = 'Alicante') {
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS);
        const data = await response.json();

        const { location, current } = data;
        const { country, localtime, name } = location;
        const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
        const { text, icon } = condition;

        return {
            country,
            localtime,
            locationName: name,
            conditionIcon: icon,
            conditionText: text,
            humidity,
            feelslike_c,
            is_day,
            temperature: temp_c,
            wind_kph,
            wind_dir
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}
