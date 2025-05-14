// Ensure the DOM is loaded before running the script

document.addEventListener("DOMContentLoaded", function () {
    const CLIENT_ID = "15b8007d9bfa4538a9771f1d7504e340";
    const CLIENT_SECRET = "e8cdfc3efbcd4d819c77d09f8935d49b";
    let accessToken = "";

    const inputElement = document.getElementById("searchInput");
    const buttonElement = document.getElementById("searchButton");
    const resultElement = document.getElementById("result");

    // Only run this part if we're on a page with the search input (explore.html)
    if (inputElement && buttonElement && resultElement) {
        let searchInput = "";

        // Event: typing in the search input
        inputElement.addEventListener("input", (event) => {
            searchInput = event.target.value;
        });

        // Event: clicking the search button
        buttonElement.addEventListener("click", (event) => {
            event.preventDefault();
            const searchTerm = inputElement.value.trim();

            if (searchTerm !== "") {
                saveSearchHistory(searchTerm);
                searchArtist(searchTerm);
            }
        });

        // Fetch Spotify Access Token
        async function fetchAccessToken() {
            const authString = btoa(CLIENT_ID + ":" + CLIENT_SECRET);

            const authParameters = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + authString
                },
                body: "grant_type=client_credentials"
            };

            try {
                const response = await fetch("https://accounts.spotify.com/api/token", authParameters);
                const data = await response.json();
                accessToken = data.access_token;
                console.log("Access Token:", accessToken);
            } catch (error) {
                console.error("Error fetching token:", error);
                resultElement.textContent = "Error fetching access token.";
            }
        }

        // Search Spotify for an artist
        async function searchArtist(searchTerm) {
            if (!accessToken) {
                resultElement.textContent = "Access token not available.";
                return;
            }

            if (!searchTerm) {
                resultElement.textContent = "Please enter an artist name.";
                return;
            }

            const searchURL = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=artist`;

            const artistParameters = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + accessToken
                }
            };

            try {
                const response = await fetch(searchURL, artistParameters);
                const data = await response.json();

                if (data.artists.items.length > 0) {
                    const artist = data.artists.items[0];
                    resultElement.textContent = `Top artist: ${artist.name}`;

                    // Fetch albums
                    const albumsURL = `https://api.spotify.com/v1/artists/${artist.id}/albums`;
                    const albumsResponse = await fetch(albumsURL, artistParameters);
                    const albumsData = await albumsResponse.json();

                    if (albumsData.items.length > 0) {
                        displayAlbums(albumsData.items);
                    } else {
                        resultElement.textContent = "No albums found for this artist.";
                    }
                } else {
                    resultElement.textContent = "No artist found.";
                }
            } catch (error) {
                console.error("Error searching for artist:", error);
                resultElement.textContent = "Error searching for artist.";
            }
        }

        // Display albums as cards
        function displayAlbums(albums) {
            resultElement.innerHTML = ''; // Clear previous results

            albums.forEach(album => {
                const card = document.createElement('div');
                card.classList.add('card');

                const albumImage = document.createElement('img');
                albumImage.src = album.images[0]?.url || 'https://via.placeholder.com/200';

                const albumName = document.createElement('h3');
                albumName.textContent = album.name;

                const releaseDate = document.createElement('p');
                releaseDate.textContent = `Released: ${album.release_date}`;

                const albumLink = document.createElement('a');
                albumLink.href = album.external_urls.spotify;
                albumLink.target = '_blank';
                albumLink.textContent = 'View on Spotify';

                card.appendChild(albumImage);
                card.appendChild(albumName);
                card.appendChild(releaseDate);
                card.appendChild(albumLink);

                resultElement.appendChild(card);
            });
        }

        // Save search to backend
        async function saveSearchHistory(artistName) {
            console.log(' Sending search to backend:', artistName);
            try {
                await fetch('http://localhost:3000/api/save-search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ artist: artistName })
                });
            } catch (error) {
                console.error("Error saving search:", error);
            }
        }

        // Fetch token on load
        fetchAccessToken();
    }

    // ========================
    // For history.html page
    // ========================
    async function fetchHistory() {
        const API_BASE = 'http://localhost:3000';

        try {
            const res = await fetch(`${API_BASE}/api/search-history`);
            const data = await res.json();

            const tableBody = document.getElementById('history-table-body');
            if (!tableBody) return;

            tableBody.innerHTML = '';

            if (data.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="2" class="text-center">No search history found.</td>`;
                tableBody.appendChild(row);
                return;
            }

            data.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${entry.artist_name}</td>
                    <td>${new Date(entry.timestamp).toLocaleString()}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (err) {
            console.error('Error fetching history:', err);
        }
    }

    // Run fetchHistory if we're on the history page
    if (window.location.pathname.includes('history.html')) {
        fetchHistory();
    }
});

