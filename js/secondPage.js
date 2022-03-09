const api_url = 'https://uselessfacts.jsph.pl/today.json?language=en';

async function getRandomFact() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.text);
    document.getElementById('fact').textContent = data.text;
}

getRandomFact();