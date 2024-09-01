<script>
    export let humidity;
    export let wind_kph;
    export let feelslike_c;
    export let wind_dir;
</script>

<footer>
    <div>
        <strong>Humedad:</strong>
        <span> {humidity}% </span>
    </div>

    <div>
        <strong>Velocidad del viento:</strong>
        <span> {wind_kph} km/h </span>
    </div>
    <div>
        <strong>Direccion del viento:</strong>
        <span> {wind_dir} </span>
    </div>
    <div>
        <strong>Sensacion Termica:</strong>
        <span> {feelslike_c}° </span>
    </div>
</footer>

<style>
    footer {
        border: 2px solid #ccc;
        width: 80%;
        border-radius: 20px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        padding: 16px 32px;
        margin: 0 auto;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
        bottom: -120px;
        position: relative;
    }

    span {
        display: block;
        font-weight: 600;
        font-size: 14px;
    }

    strong {
        font-size: 17px;
        font-weight: 8 00;
    }

    footer div {
        margin: 0 20px;
    }
</style>
