// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Rocket": "Rock",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = Object.keys(guardians).map(guardian => {
        const playlist = songs.filter(song => song.genre === guardians[guardian]);
        return { guardian, playlist };
    });
    
    const playlistsDiv = document.getElementById('playlists');
        playlists.forEach(playlist => {
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('guardian-playlist');
        guardianDiv.innerHTML = `<h2>${playlist.guardian}'s Playlist</h2>`;

        const songlist = document.createElement('ul');
        playlist.playlist.forEach(song => {
            const songItem = document.createElement('li');
            songItem.textContent = `${song.title} by ${song.artist}`;
            songItem.classList.add('playlist');
            songlist.appendChild(songItem);
              // Append each song to the songlist  // Your code here
        });

        guardianDiv.appendChild(songlist);
        playlistsDiv.appendChild(guardianDiv);
    // Use the map() function to create playlists for each Guardian
    // Your code here
});
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);