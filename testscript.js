document.getElementById('addPair').addEventListener('click', function() {
    const container = document.getElementById('inputPairs');
    const newPair = document.createElement('div');
    newPair.classList.add('inputPair');
    newPair.innerHTML = '<input type="text" placeholder="String 1"><input type="text" placeholder="String 2">';
    container.appendChild(newPair);
});

document.getElementById('generateURL').addEventListener('click', function() {
    const pairs = document.querySelectorAll('.inputPair');
    let urlString = 'https://yourdomain.com?';
    pairs.forEach((pair, index) => {
        const inputs = pair.querySelectorAll('input');
        urlString += `pair${index + 1}=${inputs[0].value},${inputs[1].value}&`;
    });
    urlString = urlString.slice(0, -1); // Remove the last &
    alert('Generated URL: ' + urlString);
});
