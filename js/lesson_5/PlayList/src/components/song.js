import Media from "./media";

class Song extends Media {
    constructor(title, artist, duration) {
        super(title, duration);
        this.artist = artist;
    }
    play () {
        this.isPlaying = true;
    }
    stop () {
        this.isPlaying = false;
    }
    toHtml () {
        return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
        <div class="col-sm-9">${this.title} - ${this.artist}</div>
        <div class="col-sm-3">${this.duration}</div></div>`
    }
}
export default Song
