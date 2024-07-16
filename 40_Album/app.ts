function make_album (artist: string , title: string , tracks?: number) {
    const album: {artist: string , title: string , tracks?: number} = {

        artist : artist,
        title : title,
        
    }
    if (tracks !== undefined){
        album.tracks = tracks
    }

    return album;
}

const album1 = make_album('Artist 1', 'Album 1');
console.log(album1);

const album2 = make_album('Artist 2', 'Album 2');
console.log(album2);

const album3 = make_album('Artist 3', 'Album 3' , 15);
console.log(album3);

