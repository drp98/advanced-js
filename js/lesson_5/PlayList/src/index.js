import Song from './components/song'
import Movie from './components/movie'
import Playlist from './components/playlist'

const playlist = new Playlist();
const song1 = new Song('Song1','Artist1','1:34')
const song2 = new Song('Song2','Artist2','1:54')
const song3 = new Song('Song3','Artist3','1:24')

const movie1 = new Movie('Movie1', 1993, '1:23:33')

playlist.add(song1)
playlist.add(song2)
playlist.add(song3)
playlist.add(movie1)

const list = document.getElementById('list')
playlist.render(list);

const play = document.getElementById('btn-play')
const stop = document.getElementById('btn-stop')
const next = document.getElementById('btn-next')
play.onclick = function(){
    playlist.play();
    playlist.render(list)
}
stop.onclick = function(){
    playlist.stop();
    playlist.render(list)
}
next.onclick = function(){
    playlist.next();
    playlist.render(list)
}


