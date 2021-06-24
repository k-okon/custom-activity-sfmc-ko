let jsonOutput = document.querySelector('#json-output');

fetch('/data.json')
    .then(response => response.json())
    .then(data => jsonOutput.innerText = data);