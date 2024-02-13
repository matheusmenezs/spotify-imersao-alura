const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm) {
    fetch(`https://json-server-vercel-navy-omega.vercel.app/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}

function displayResults(results) {
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    results.forEach((element) => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
    });

    resultsArtist.classList.remove('hidden')
}



document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden')
        resultsArtist.classList.add('hidden')
        return
    }

    requestApi(searchTerm)
})