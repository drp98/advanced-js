class Media {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        this.isPlaying = false;
    }
    play () {
        this.isPlaying = true;
    }
    stop () {
        this.isPlaying = false;
    }
}
export default Media