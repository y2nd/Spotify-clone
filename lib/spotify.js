import SpotifyWebApi from "spotify-web-api-node";

const SpotifyWebApi = require("spotify-web-api-node");


const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-read-modify-playback-state",
    "user-read-recently-played",
    "user-follow-read",
].join(',');

const params = {
    scope: scopes,
};

// Actually we want to build this url
// https://accounts.spotify.com/authorize?params=user-read-email,playlist-read-private...

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const SpotifyWebApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});


export default SpotifyWebApi;


export { LOGIN_URL };