export default class Song {
    constructor({ id, mid, singer, name, album, duration, image, url, aliaName }) {
        this.id = id
        this.singer = singer
        this.name = name
        this.album = album
        this.aliaName = aliaName
        this.image = image
        this.mid = mid
        this.duration = duration
        this.url = url
    }
}

function singerName(arr) {
    let name = []
    name = arr.map((item) => {
        return item.name
    })
    return name.join('/')
}

// RecommendView推荐页 api 获取推荐新音乐
export function createRecommendSong(music) {
    return new Song({
        id: music.id,
        singer: singerName(music.song.artists),
        name: music.name,
        album: music.song.album.name,
        image: music.song.album.picUrl
    })
}