<script>
    import { getWeatherFrom } from "../services/weather.js";
    import WeatherIcon from "../components/weather-icon.svelte";
    import WeatherFooter from "../components/weather-footer.svelte";
    let city = "Alicante";
    let weatherPromise = getWeatherFrom(city); // Esta es una promesa

    function updateCity() {
        weatherPromise = getWeatherFrom(city);
    }
</script>

<div class="container">
    <form on:submit|preventDefault={updateCity}>
        <input type="text" bind:value={city} placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
    </form>

    {#await weatherPromise}
        <p>Loading...</p>
    {:then weather}
        <section>
            <h1>{weather.locationName}</h1>
            <h2>{weather.temperature}º</h2>
            <WeatherIcon
                text={weather.conditionText}
                icon={weather.conditionIcon}
            />
        </section>
        <WeatherFooter
            humidity={weather.humidity}
            wind_kph={weather.wind_kph}
            feelslike_c={weather.feelslike_c}
            wind_dir={weather.wind_dir}
        />
    {:catch error}
        <p>Could not load weather data. Please try again later.</p>
    {/await}
</div>

<style>
    .container {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        min-height: 65vh;
        width: 80%;
    }

    /* Formulario de ciudad */
    form {
        margin-bottom: 20px;
    }

    input[type="text"] {
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-right: 10px;
        margin-bottom: 10px;
        width: 60%;
        max-width: 250px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #555;
    }

    /* Estilo para la sección de resultados del clima */
    section {
        padding: 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    h1 {
        font-weight: 600;
        color: #555;
        text-transform: uppercase;
        font-size: 24px;
        letter-spacing: 2px;
    }

    h2 {
        font-weight: 700;
        font-size: 100px;
        color: #333;
        margin-bottom: 10px;
    }
</style>
