class fileInfo {
    fileName: string;
    fileSize: number;
    fileExtension: string;
    fileType: string;
    play(){
        console.log(`${this.fileType} play`);
    }
    stop(){
        console.log(`${this.fileType} stop`);
    }
}

interface MusicInfo {
    singer: string;
    volumeUp():void;
    volumeDown():void;
}

interface PictureInfo {
    photographer: string;
    place: string;
    date: string;
}

interface MovieInfo {
    director: string;
    mainActor: string;
    mainActress: string;
    volumeUp():void;
    volumeDown():void;
}

class Music extends fileInfo implements MusicInfo {
    constructor(fileName: string, fileSize: number, fileExtension: string, public singer = "?", fileType = "Music") {
         super();
         this.fileName = fileName;        
         this.fileSize = fileSize;
         this.fileExtension = fileExtension;
         this.singer = singer;
         this.fileType = fileType;
    } 
    
    showInfo(){
        console.log(`fileType: ${this.fileType}`);
        console.log(`fileSize: ${this.fileSize}`);
        console.log(`singer: ${this.singer} `);
        console.log(`fileName: ${this.fileName}.${this.fileExtension}`);
    }

    volumeUp(){
        console.log("Volume Up");
    }
    
    volumeDown(){
        console.log("Volume Down");
    }
}

class Picture extends fileInfo implements PictureInfo {
    constructor(fileName: string, fileSize: number, fileExtension: string, public photographer = "?", public place = "?", public date = "?", fileType = "Picture") {
         super();
         this.fileName = fileName;        
         this.fileSize = fileSize;
         this.fileExtension = fileExtension;
         this.photographer = photographer;
         this.place = place;
         this.date = date;
         this.fileType = fileType;
    } 
    
    showInfo(){
        console.log(`fileType: ${this.fileType}`);
        console.log(`fileSize: ${this.fileSize}`);
        console.log(`photographer: ${this.photographer}`);
        console.log(`place: ${this.place}`);
        console.log(`date: ${this.date}`);
        console.log(`fileName: ${this.fileName}.${this.fileExtension}`);
    }
}

class Movie extends fileInfo implements MovieInfo {
    constructor(fileName: string, fileSize: number, fileExtension: string, public director = "?", public mainActor = "?", public mainActress = "?", fileType = "Movie") {
         super();
         this.fileName = fileName;        
         this.fileSize = fileSize;
         this.fileExtension = fileExtension;
         this.director = director;
         this.mainActor = mainActor;
         this.mainActress = mainActor;      
         this.fileType = fileType;
    } 
    
    showInfo(){
        console.log(`fileType: ${this.fileType}`);
        console.log(`fileSize: ${this.fileSize}`);
        console.log(`director: ${this.director}`);
        console.log(`main character: ${this.mainActor}, ${this.mainActor}`);
        console.log(`fileName: ${this.fileName}.${this.fileExtension}`);
    }
    
    volumeUp(){
        console.log("Volume Up");
    }
    
    volumeDown(){
        console.log("Volume Down");
    }
}

let musicTest = new Music("Moment Just Like This", 2048, "mp3", "Dami Im");
musicTest.play();
musicTest.showInfo();
musicTest.volumeUp();
musicTest.volumeDown();
musicTest.stop();

console.log(" ");

let pictureTest = new Picture("busan_tour", 2048, "jpg", "jina", "busan", "2016-08-16 12:12:12");
pictureTest.play();
pictureTest.showInfo();
pictureTest.stop();

console.log(" ");

let movieTest = new Movie("Because I love you", 5000000, "mp4", "Joo Ji-hong", "Cha Tae-hyun", "Kim You-jung");
movieTest.play();
movieTest.showInfo();
movieTest.volumeUp();
movieTest.volumeDown();
movieTest.stop();