import Media from './media'

class Movie extends Media {
    constructor(title, year, duration) {
        super(title, duration)
        this.year = year;
    }
    toHtml () {
        return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
        <div class="col-sm-9">${this.title} - ${this.year}</div>
        <div class="col-sm-3">${this.duration}</div></div>`
    }
}

export default Movie;