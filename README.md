# Spotify Playlist to Album Mapper

Map a playlist consisting of tracks from multiple albums to a set of albums.

# Use case

There's a [big playlist](https://open.spotify.com/playlist/5e6XxV3vhHhdfqcjXScH8o?si=b-2uSIflQa2zyt4AAd_AAQ) of all episodes the German radio play "Die Drei ???" on Spotify. It consists of the tracks of all ~200 episode albums (plus special editions). Navigating this playlist is quite difficult, since it is quite long (about 9800 tracks). Especially when listening to different music intermittently, you need to find your position again in this long playlist.

To work around this, there are apps specifically made for listening to audio books on Spotify. They work on an album basis, so you need to search for the specific album containing your audio book. You can then listen to that album, and your position in this album will get saved once you listen to other music.

As a short project, I wanted to play around with the Spotify API to find out if I could create a list of albums used in this playlist (yes I know you can just click on a track to find its album, this is an exercise 😉). 

Therefore I made this small project that does exactly this job. It reads a playlist's tracks' albums (quite a mouthful) and puts those albums in a set (which creates a unique list). 
