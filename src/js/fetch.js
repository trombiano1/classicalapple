"use strict";
import dt from 'datatables.net';

const developerToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IlBOOEc2UTM5VzYifQ.eyJpc3MiOiIzNDQ5MjhYNTJQIiwiZXhwIjoxNjYzMjA2NzgxLCJpYXQiOjE2NjI2MDE5ODF9.oZQ1czou1KMZXCuhaXZlv5pMV5t4HGOyVDrbcJSELY3IWvUIDGzBC6KGm8P2oIt4_benZlLR1dOunREzRazhgA"

const COMPOSER_IDS = {'John Adams': 149, 'Thomas Adès': 130, 'Isaac Albéniz': 216, 'Tomaso Albinoni': 27, 'George Antheil': 108, 'Malcolm Arnold': 20, 'Milton Babbitt': 180, 'Johann Sebastian Bach': 87, 'Carl Philipp Emanuel Bach': 192, 'Johann Christian Bach': 109, 'Mily Balakirev': 21, 'Samuel Barber': 19, 'Béla Bartók': 125, 'Arnold Bax': 103, 'Ludwig van Beethoven': 145, 'Vincenzo Bellini': 51, 'Alban Berg': 210, 'Luciano Berio': 133, 'Hector Berlioz': 175, 'Leonard Bernstein': 135, 'Franz Berwald': 195, 'Heinrich Franz von Biber': 47, 'Harrison Birtwistle': 48, 'Georges Bizet': 68, 'Ernest Bloch': 106, 'Luigi Boccherini': 66, 'Alexander Borodin': 43, 'Pierre Boulez': 132, 'Joly Braga Santos': 153, 'Johannes Brahms': 80, 'Benjamin Britten': 169, 'Max Bruch': 184, 'Anton Bruckner': 2, 'Ferruccio Busoni': 84, 'Dietrich Buxtehude': 73, 'William Byrd': 86, 'John Cage': 56, 'Camargo Guarnieri': 159, 'Elliott Carter': 163, 'Emmanuel Chabrier': 123, 'Marc-Antoine Charpentier': 9, 'Ernest Chausson': 61, 'Carlos Chávez': 174, 'Luigi Cherubini': 120, 'Frédéric Chopin': 152, 'Aaron Copland': 170, 'Arcangelo Corelli': 139, 'John Corigliano': 144, 'François Couperin': 128, 'George Crumb': 31, 'César Cui': 71, "Vincent d'Indy": 127, 'Michael Daugherty': 81, 'Claude Debussy': 105, 'Léo Delibes': 193, 'Frederick Delius': 8, 'Josquin Des Prez': 50, 'Karl Ditters von Dittersdorf': 206, 'Ernst von Dohnányi': 112, 'Gaetano Donizetti': 89, 'John Dowland': 102, 'Guillaume Dufay': 82, 'Paul Dukas': 116, 'Maurice Duruflé': 91, 'Henri Dutilleux': 110, 'Antonín Dvořák': 189, 'Edward Elgar': 198, 'George Enescu': 38, 'Manuel de Falla': 37, 'Gabriel Fauré': 53, 'John Field': 74, 'César Franck': 12, 'Girolamo Frescobaldi': 58, 'George Gershwin': 136, 'Carlo Gesualdo': 14, 'Orlando Gibbons': 151, 'Alberto Ginastera': 32, 'Philip Glass': 95, 'Alexander Glazunov': 179, 'Reinhold Glière': 85, 'Mikhail Ivanovich Glinka': 156, 'Christoph Willibald von Gluck': 92, 'Karl Goldmark': 1, 'Antonio Carlos Gomes': 207, 'Henryk Górecki': 16, 'Morton Gould': 70, 'Charles Gounod': 29, 'Percy Grainger': 99, 'Enrique Granados': 76, 'Edvard Grieg': 162, 'Sofia Gubaidulina': 172, 'George Frideric Handel': 67, 'Howard Hanson': 42, 'Roy Harris': 201, 'Franz Joseph Haydn': 208, 'Hans Werner Henze': 155, 'Victor Herbert': 94, 'Paul Hindemith': 154, 'Vagn Holmboe': 158, 'Gustav Holst': 75, 'Arthur Honegger': 200, 'Johann Nepomuk Hummel': 30, 'Engelbert Humperdinck': 15, 'Jacques Ibert': 122, 'Charles Ives': 217, 'Leoš Janáček': 96, 'Clément Janequin': 23, 'Scott Joplin': 148, 'Dmitry Kabalevsky': 63, 'Aram Khachaturian': 218, 'Zoltán Kodály': 34, 'Erich Wolfgang Korngold': 7, 'Edouard Lalo': 59, 'Orlande de Lassus': 88, 'Ruggero Leoncavallo': 194, 'Léonin': 220, 'György Ligeti': 26, 'Franz Liszt': 197, 'Fernando Lopes-Graça': 119, 'Jean-Baptiste Lully': 10, 'Witold Lutoslawski': 142, 'Edward MacDowell': 114, 'Guillaume de Machaut': 157, 'Gustav Mahler': 77, 'Marin Marais': 204, 'Benedetto Marcello': 177, 'Alessandro Marcello': 187, 'Bohuslav Martinů': 11, 'Pietro Mascagni': 69, 'Jules Massenet': 124, 'Felix Mendelssohn': 147, 'Olivier Messiaen': 150, 'Francisco Mignone': 64, 'Darius Milhaud': 121, 'Ernest Moeran': 164, 'Claudio Monteverdi': 39, 'Wolfgang Amadeus Mozart': 196, 'Modest Mussorgsky': 181, 'Carl Nielsen': 52, 'Luigi Nono': 111, 'Jacob Obrecht': 28, 'Johannes Ockeghem': 117, 'Jacques Offenbach': 134, 'Carl Orff': 93, 'Johann Pachelbel': 115, 'Niccolò Paganini': 3, 'Giovanni Pierluigi da Palestrina': 214, 'Arvo Pärt': 5, 'Krzysztof Penderecki': 203, 'Giovanni Battista Pergolesi': 113, 'Pérotin': 219, 'Astor Piazzolla': 40, 'Francis Poulenc': 202, 'Michael Praetorius': 78, 'Sergei Prokofiev': 185, 'Giacomo Puccini': 146, 'Henry Purcell': 199, 'Sergei Rachmaninoff': 188, 'Jean-Philippe Rameau': 178, 'Einojuhani Rautavaara': 100, 'Maurice Ravel': 57, 'Max Reger': 72, 'Steve Reich': 176, 'Ottorino Respighi': 173, 'Wolfgang Rihm': 90, 'Nikolai Rimsky-Korsakov': 118, 'Joaquín Rodrigo': 215, 'Ned Rorem': 107, 'Gioachino Rossini': 60, 'Albert Roussel': 140, 'Camille Saint-Saëns': 45, 'Antonio Salieri': 143, 'Erik Satie': 104, 'Domenico Scarlatti': 97, 'Alessandro Scarlatti': 65, 'Franz Schmidt': 160, 'Alfred Schnittke': 137, 'Arnold Schoenberg': 62, 'Franz Schubert': 183, 'William Schuman': 24, 'Robert Schumann': 129, 'Heinrich Schütz': 191, 'Alexander Scriabin': 18, 'Dmitri Shostakovich': 46, 'Jean Sibelius': 186, 'Bedrich Smetana': 211, 'Fernando Sor': 212, 'Louis Spohr': 166, 'Carl Stamitz': 209, 'Wilhelm Stenhammar': 4, 'Karlheinz Stockhausen': 101, 'Richard Strauss': 171, 'Johann Strauss Jr': 165, 'Igor Stravinsky': 190, 'Josef Suk': 33, 'Jan Pieterszoon Sweelinck': 182, 'Karol Szymanowski': 49, 'Toru Takemitsu': 213, 'Thomas Tallis': 126, 'Giuseppe Tartini': 167, 'John Taverner': 54, 'Pyotr Ilyich Tchaikovsky': 79, 'Georg Philipp Telemann': 83, 'Michael Tippett': 13, 'Edgard Varèse': 22, 'Ralph Vaughan Williams': 36, 'Giuseppe Verdi': 35, 'Tomás Luis de Victoria': 205, 'Heitor Villa-Lobos': 55, 'Antonio Vivaldi': 98, 'Richard Wagner': 138, 'William Walton': 44, 'Carl Maria von Weber': 168, 'Anton Webern': 6, 'Kurt Weill': 131, 'Charles-Marie Widor': 41, 'Hugo Wolf': 161, 'Iannis Xenakis': 17, 'Eugene Ysaÿe': 141, 'Alexander von Zemlinsky': 25}

const performerTypes = {'Chamber' : ['Ensemble'], 'Orchestral':['Conductor', 'Orchestra'], 'Keyboard':['Solist'], 'Stage':['Conductor', 'Orchestra'], 'Concerto' : ['Solist', 'Conductor', 'Orchestra']};

var $ = require('jquery');
window.$ = $;

let searchedAlbumNames = {};
let composerIdHistory = {};
let queryComposerName;
let queryComposerId;
// const queryPieceId = '7638'; // Tchaikovsky 5
let queryPieceName;
let queryPieceId;
let queryPieceRoles = [];

var resultTable = $('#resultTable').DataTable({
    searching: true,
    columnDefs: [
        {
            targets: 0,
            width: '130px',
            className: 'text-center align-middle',
        }, 
        {
            targets: 1,
            width: '50px',
            className: 'text-center align-middle',
        },
        {
            targets: 2,
            className: 'align-middle',
        },
        {
            targets: 3,
            className: 'align-middle',
        },
        {
            targets: 4,
            className: 'align-middle',
        },
        {
            targets: 5,
            className: 'align-middle',
        }
      ]
});

$(document.body).on('click', '.worklink' ,function(e){
    $('#worksCollapse').removeClass('show');

    queryPieceId = parseInt($(this).attr('value'));
    queryPieceName = $(this).html();

    // set button name
    document.getElementById('selectedWork').innerHTML = queryPieceName;

    // show table container and spinner
    $('#tableContainer').removeClass('d-none');
    $('#spinner').removeClass('d-none');

    console.log(queryPieceName);
    // get rid of 'in E major'
    if (queryPieceName.includes(' in ') && queryPieceName.includes(' major')){
        queryPieceName = queryPieceName.split(" in ")[0] + ' ' + queryPieceName.split(' major').pop();
    }
    if (queryPieceName.includes(' in ') && queryPieceName.includes(' minor')){
        queryPieceName = queryPieceName.split(" in ")[0] + ' ' + queryPieceName.split(' minor').pop();
    }

    // get rid of 'no.'
    queryPieceName = queryPieceName.replace(" no. ", " ");

    // get rid of 'op. 42'
    queryPieceName = queryPieceName.split(" op.")[0];

    // get rid of comma
    queryPieceName = queryPieceName.replaceAll(",", " ");

    // get rid of double space
    queryPieceName = queryPieceName.replaceAll("  ", " ");

    //get rid of end space
    queryPieceName.replace(/\s+$/, '');

    getResults();
});

$('#composer').on('input', () => {
    var val = document.getElementById("composer").value;
    var opts = document.getElementById('composersdatalist').childNodes;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        // An item was selected from the list!
        // yourCallbackHere()
        queryComposerId = COMPOSER_IDS[opts[i].value];
        queryComposerName = opts[i].value.split(/ /).pop();
        getGenres();
        $('#genreContainer').removeClass('d-none');
        break;
      }
    }
});

$('#genre').on('change', function() {
    listWorks(document.getElementById('genre').value);
    // $('#worksCollapse').collapse();
    $('#workContainer').removeClass('d-none');
    $('#worksCollapse').addClass('show');
});

function listWorks(genre){
    // console.log(guesserAPIString, queryPieceId);
    const url = `https://api.openopus.org/work/list/composer/${queryComposerId}/${genre}.json`
    let request = new XMLHttpRequest();
    // request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    request.open("POST", url, true);
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState==4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            // console.log(data, guesserAPIString)
            // console.log(data);
            let HTMLString = "";
            data['works'].forEach(work => {
                HTMLString += `<a href="#" class="worklink list-group-item list-group-item-action w-100" value="${work['id']}">${work['title']}</a>`;
                // HTMLString += `<li class="list-group-item" value=${work['id']}>${work['title']}</li>`;
            });
            document.getElementById('worksList').innerHTML = HTMLString;
        }
    }
}

function getGenres(){
    // console.log(guesserAPIString, queryPieceId);
    const url = `https://api.openopus.org/genre/list/composer/${queryComposerId}.json`
    let request = new XMLHttpRequest();
    // request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    request.open("POST", url, true);
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState==4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            // console.log(data, guesserAPIString)
            // console.log(data['genres']);
            let HTMLString = `<option value="Select genre" disabled selected>Select genre...</option>`;
            data['genres'].forEach(genre => {
                if (genre != "Popular" && genre != "Recommended"){
                    HTMLString += `<option value="${genre}">${genre}</option>`;
                }
            });
            document.getElementById('genre').innerHTML = HTMLString;
        }
    }
}

function getResults(){
    console.log(queryComposerId);
    console.log(queryComposerName);
    console.log(queryPieceId);
    console.log(queryPieceName);
    resultTable.clear().draw();
    // const queryComposerId = '186'; // Sibelius
    // const queryComposerName = 'Sibelius'; 
    // const queryComposerId = '186'; // Sibelius
    // const queryPieceId = '22016'; // Sibelius 5
    getAllSongCandidates().then(
        function(value){
            console.log("Albums retrieved");
            let albums = value;
            let funcs = [];
            let trackNumbers = [];
            let remember = [];
            // for each album
            albums.forEach(album => {
                let guesserAPIArray = [];
                let pieceNameHistory = {};
                let albumTrackNumbers = [];
                // for each song
                album['songs'].forEach(song => {
                    const composerName = song['composerName'];
                    const tracknumber = song['trackNumber'];
                    let pieceName = song['name'].split(":")[0];

                    // name shenanigans
                    pieceName = pieceName.replace("No ", "No. ");
                    
                    // create guesserAPIArray for the album
                    if (typeof composerName === "undefined" ){
                        // composerNameが定義されていないCD
                        // console.log(song["name"], album);
                        // アルバムタイトルにcomposerNameが入っていないか確認
                        if (album["name"].toLowerCase().includes(queryComposerName.toLowerCase())){
                            guesserAPIArray.push({'composer': queryComposerName, 'title': pieceName});// .split(", FP")[0]});
                            albumTrackNumbers.push(tracknumber);
                            pieceNameHistory[pieceName] = true;
                        }
                    } else {
                        if (typeof pieceNameHistory[pieceName] === "undefined"){
                            guesserAPIArray.push({'composer': composerName, 'title': pieceName});// .split(", FP")[0]});
                            albumTrackNumbers.push(tracknumber);
                            pieceNameHistory[pieceName] = true;
                        }
                    }
                });
                // console.log(album, guesserAPIArray);
                funcs.push(guessWorks(JSON.stringify(guesserAPIArray), queryPieceId));
                trackNumbers.push(albumTrackNumbers);
                remember.push(guesserAPIArray);
            });
            Promise.all(funcs).then((values) => {
                // console.log(values);
                $('#spinner').addClass('d-none');
                $('#tableWrapper').removeClass('d-none');
                console.log("Guesses retrieved");
                resultTable.row().remove();

                let getRolesFuncs = [];

                for (let i = 0; i < albums.length; i++){
                    if (values[i] != -1 && albums[i]['songs'].length > trackNumbers[i][values[i]]) {
                        getRolesFuncs.push(getRoles(albums[i]['songs'][trackNumbers[i][values[i]] - 1]['artistName']));

                        // getRoles(albums[i]['songs'][trackNumbers[i][values[i]] - 1]['artistName']).then((roles) => {
                        //     resultTable.row.add([
                        //         `<a href='${albums[i]['url']}' target="_blank">
                        //         <img class='shadow-sm albumart' src=${albums[i]['artworkUrl'].replace('{w}x{h}', '100x100')}/></a>`,
                        //         albums[i]['releaseDate'].split('-')[0],
                                
                        //         ``,

                        //         `<div class='ic'><span class='orchicon'></span>${roles['Orchestra']}</div>`,

                        //         `<div class='ic'><span class='batonicon'></span>${roles['Conductor']}</div>`,

                        //         ``

                        //         // roles[''],
                        //     ]).draw(false);
                        // });
                    } else {
                        // console.log("false", albums[i]);
                    }
                }

                Promise.all(getRolesFuncs).then((rolesList) => {
                    const counts = {};
                    rolesList.forEach(roles => {
                        counts[Object.keys(roles).sort()] = (counts[Object.keys(roles).sort()] || 0) + 1;
                    });
                    console.log(counts);
                    let maximum = -1;

                    for (const [key, value] of Object.entries(counts)) {
                        if (value > maximum){
                            queryPieceRoles = key.split(',').filter(Boolean);
                            maximum = value;
                        }
                    }
                    console.log(queryPieceRoles);
                    console.log(queryPieceRoles.length);
                    for (let i = 0; i < 4; i++) {
                        if (i < queryPieceRoles.length){
                            $(resultTable.column(i+2).header()).text(queryPieceRoles[i]);
                        } else {
                            resultTable.column(i+2).visible(false);
                        }
                    }

                    console.log(queryPieceRoles);

                    // set header and hide columns

                });
            });
        }
    );
}

function getRoles(rolesString){
    return new Promise(function(resolve){
        let rolesAPIString = JSON.stringify(rolesString.split(/ and | & |\/|, /));
        // console.log(rolesAPIString);
        const url = `https://api.openopus.org/dyn/performer/list?names=${rolesAPIString}`;
        let request = new XMLHttpRequest();
        let result = {"": []};
        request.open("POST", url, true);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState==4 && this.status == 200) {
                const data = JSON.parse(this.responseText);
                // console.log(data);
                data['performers']['readable'].forEach(element => {
                    if (element['role'] in result){
                        result[element['role']].push(element['name']);
                    } else {
                        result[element['role']] = [element['name']];
                    }
                });

                // // set roles for orchestral
                // if (queryPieceType == 'Orchestral'){
                //     Object.keys(result).forEach(key => {
                //         if (key != "Orchestra" && key != "Conductor"){
                //             result[""].push(result[key]);
                //         }
                //     });
                //     if ("Orchestra" in result && "Conductor" in result){
                //         if (result["Orchestra"].length >= 1 && result["Conductor"].length == 0 && result[""].length == 1){
                //             result["Conductor"] = result[""];
                //             result[""] = [];
                //         }
                //     }
                //     if (!"Orchestra" in result){
                //         result["Orchestra"] = [""];
                //     }
                //     if (!"Conductor" in result){
                //         result["Conductor"] = [""];
                //     }
                // }

                // console.log(result);
                
                resolve(result);
            }
        }
    });
}

function guessWorks(guesserAPIString, queryPieceId){
    return new Promise(function(resolve){
        // console.log(guesserAPIString, queryPieceId);
        const url = `https://api.openopus.org/dyn/work/guess?works=${guesserAPIString}`
        let request = new XMLHttpRequest();
        // request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        request.open("POST", url, true);
        request.send();

        let found = -1;

        request.onreadystatechange = function () {
            if (request.readyState==4 && this.status == 200) {
                const data = JSON.parse(this.responseText);
                // console.log(data, guesserAPIString)
                if (data['works'] !== null){
                    for (let i = 0; i < data['works'].length; i++){
                        const element = data['works'][i];
                        if (queryPieceId == element['guessed']['id']){
                            found = i;
                            break;
                        }
                    }
                }
                resolve(found);
            }
        }
    });
}

function getComposerId(string){
    return new Promise(function(resolve){
        // if already exists, return history
        if (typeof composerIdHistory[string] !== "undefined"){
            resolve(composerIdHistory[string]);
        }

        // ask API
        const url = `https://api.openopus.org/composer/list/search/${string}.json`
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send();

        request.onreadystatechange = function () {
            if (request.readyState == 4 && this.status == 200) {
                const data = JSON.parse(this.responseText);
                const composerId = data['composers'][0]['id'];
                composerIdHistory[string] = composerId;
                // Return first hit
                resolve(data['composers'][0]['id'])
            }
        };
    });
}

function getAllSongCandidates(offset){
    return new Promise(function(resolve){
        let albums = [];
        // ループ処理（再帰的に呼び出し）
        function loop(i) {
            // 非同期処理なのでPromiseを利用
            getSongCandidates(i).then(function(value) {
                // console.log(value);
                if (value[1]) {
                    albums = albums.concat(value[0]);
                    loop(i+25);
                } else {
                    resolve(albums);
                }
            });
        }
        // 初回実行
        loop(0);
    });
}

function getSongCandidates(offset){
    return new Promise(function(resolve){
        console.log(offset);
        // const url = 'https://api.music.apple.com/v1/catalog/us/search?limit=25&types=albums&term=Tchaikovsky+Symphony+1'
        // const url = 'https://api.music.apple.com/v1/catalog/us/search?limit=5&types=songs&term=poulenc+trio'
        // const url = `https://api.music.apple.com/v1/catalog/us/search?offset=${offset}&limit=25&term=Tchaikovsky+symphony+5&types=albums`
        const url = `https://api.music.apple.com/v1/catalog/us/search?offset=${offset}&limit=25&term=${queryComposerName}+${queryPieceName.replaceAll(' ', '+')}&types=albums`
        // console.log(url);

        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.setRequestHeader('Authorization', "Bearer "+developerToken);
        request.send();
        
        let albums = [];

        request.onreadystatechange = function () {
            if (request.readyState==4 && this.status == 200) {
                const data = JSON.parse(this.responseText);
                let funcs = [];
                let cnt = true;

                if (data['meta']['results']['order']['length'] == '0'){
                    cnt = false;
                    resolve([],cnt);
                } else {
                    // // for debug; cuts off at 100
                    // if (offset > 4){
                    //     cnt = false;
                    // }

                    data['results']['albums']['data'].forEach(element => {
                        let album = {};
                        album["id"] = element['id'];
                        album["name"] = element['attributes']['name'];
                        album["releaseDate"] = element['attributes']['releaseDate'];
                        album["recordLabel"] = element['attributes']['recordLabel'];
                        album["url"] = element['attributes']['url'];
                        album["artworkUrl"] = element['attributes']['artwork']['url'];
                        // console.log(element['attributes']['artwork']);
                        funcs.push(getSongsInAlbum(album));
                    });
                    Promise.all(funcs).then(
                        function(values){
                            resolve([values, cnt]);
                        }
                    )
                }
            }
        };
    });
}

// function getAlbum(songId){
//     return new Promise(function(resolve){
//         const url = `https://api.music.apple.com/v1/catalog/us/songs/${songId}/albums`

//         let request = new XMLHttpRequest();
//         request.open("GET", url, true);
//         request.setRequestHeader('Authorization', "Bearer "+developerToken);
//         request.send();

//         let album = {}

//         request.onreadystatechange = function () {
//             if (request.readyState==4 && this.status == 200) {
//                 let data = JSON.parse(this.responseText);

//                 album["id"] = data['data'][0]['id'];
//                 album["name"] = data['data'][0]['attributes']['name'];
//                 album["releaseDate"] = data['data'][0]['attributes']['releaseDate'];
//                 album["recordLabel"] = data['data'][0]['attributes']['recordLabel'];
//                 album["url"] = data['data'][0]['attributes']['url'];

//                 getSongsInAlbum(album["id"]).then(
//                     function(value){
//                         album["songs"] = value;
//                         resolve(album);
//                     }
//                 );
//             }
//         }
//     });
// }

function getSongsInAlbum(album){
    return new Promise(function(resolve){
        const albumId = album["id"];
        // const url = 'https://api.music.apple.com/v1/catalog/us/songs/' + id + '/albums'
        const url = `https://api.music.apple.com/v1/catalog/us/albums/${albumId}/tracks`

        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.setRequestHeader('Authorization', `Bearer ${developerToken}`);
        request.send();

        let songsInAlbum = [];

        request.onreadystatechange = function () {
            if (request.readyState==4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                data['data'].forEach(element => {
                    let songInAlbum = {};
                    // console.log(element['attributes']);
                    songInAlbum["artistName"] = element['attributes']['artistName'];
                    songInAlbum["attribution"] = element['attributes']['attribution'];
                    songInAlbum["composerName"] = element['attributes']['composerName'];
                    songInAlbum["movementCount"] = element['attributes']['movementCount'];
                    songInAlbum["movementName"] = element['attributes']['movementName'];
                    songInAlbum["movementNumber"] = element['attributes']['movementNumber'];
                    songInAlbum["trackNumber"] = element['attributes']['trackNumber'];
                    songInAlbum["name"] = element['attributes']['name'];
                    songsInAlbum.push(songInAlbum);
                });
                album['songs'] = songsInAlbum;
                resolve(album);
            }
        }
    });
}