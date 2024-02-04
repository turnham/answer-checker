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
    urlString = urlString.slice(0, -1); // Remove the last "&"

    const urlDisplay = document.getElementById('urlDisplay');
    const generatedURL = document.getElementById('generatedURL');
    generatedURL.value = urlString;
    urlDisplay.classList.remove('hidden');
});

document.getElementById('copyURL').addEventListener('click', function() {
    const copyText = document.getElementById('generatedURL');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied to clipboard: " + copyText.value);
});
