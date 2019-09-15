const SpotifyWebApi = require("spotify-web-api-node");
const credentials = require('./credentials');

// I got these values by following https://developer.spotify.com/documentation/web-api/quick-start/
const client_id = credentials.client_id; // Your client id
const client_secret = credentials.client_secret; // Your secret
const redirect_uri = credentials.redirect_uri; // the redirect uri
const accessToken = credentials.accessToken;
const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
});

const playlistId = "5e6XxV3vhHhdfqcjXScH8o"


spotifyApi.setAccessToken(accessToken);

async function download() {
    try {

        let more = true;
        let offset = 0;
        const limit = 100;
        let items = [];

        while (more) {
            const data = await spotifyApi.getPlaylistTracks(playlistId, {
                offset: offset,
                limit: limit,
                // change the album(...) part according to
                // https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/
                fields: 'items(track(album(name,id))),total,limit,offset,next'
            });
            const body = data.body;
            items = items.concat(body.items);
            console.log(`downloading playlist, total ${body.total}, @offset ${offset}`);
            offset += limit;
            more = body.next !== null
        }

        // hacky part
        // easy set equals: use JSON stringify to compare objects as long as they're primitive properties
        const set = new Set(items.map(item => JSON.stringify(item.track.album)))
        const albums = [...set].map((value) => JSON.parse(value))
        console.log(JSON.stringify(albums, null, 2))
    } catch (err) {
        console.error(err)
    }

}


download();
