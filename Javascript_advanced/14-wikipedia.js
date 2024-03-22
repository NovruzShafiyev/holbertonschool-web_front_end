const createElement = (data) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
};

const queryWikipedia = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const pages = response.query.pages;
                const extract = pages[Object.keys(pages)[0]].extract;
                callback(extract);
            } else {
                console.error('Error fetching data from Wikipedia');
            }
        }
    };
    xhr.send();
};

queryWikipedia(createElement);