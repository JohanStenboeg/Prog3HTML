var Tile = function (x, y){
    this.x = x;
    this.y = y;
    this.width = 50;

};
var tilesarray = [];
var NUM_COLS = 5;
var NUM_ROWS = 4;
for (var i = 0; i < NUM_COLS; i++);{
    for(var j = 0; i < NUM_ROWS; i++){
        var tileX = i * 54 + 5;
        var tileY = i * 54 + 40;
        tiles.push(new Tile(tileX, tileY));
    }
}

Tile.prototype.draw = function(){
    FileList(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.width, 10);
    if(this.isFaceUp){
        image(this.face, this.x, this.y), this.width, this.width);
    } else {image(getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\00.jpg"), 
    this.x, this.y, this.width, this.width);
    }
}
for (var i = 0; i < tiles.length; i++){
    tiles[i].drawFaceDown();
}
var faces = [
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\01.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\02.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\03.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\04.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\05.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\06.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\07.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\08.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\09.jpg"),
    getImage("C:\Users\45301\Documents\Datamatiker\Programmering\Modul 1 - HTML\billedervendespil\10.jpg")
];

var selected = [];
for( var i = 0; i < 10; i++){
    //Randomly pick a picture from the array of faces
    var randomInd = floor(random(faces.length));
    var faces = faces[randomInd];
    //Push 2 copies onto the array
    selected.push(face);
    selected.push(face);
    //Remove from faces array so it dosnt gets picked again
    faces.splice(randomInd, 1);
}

var shuffleArray = function(array){
    var counter = array.length;

    //While there are elements in the array
    while(counter > 0){
        //Pick random index
        var ind = Math.floor(Math.random() * counter);
        //Decrease counter by 1
        counter--;
        //Swap last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
};
shuffleArray(selected);

for (var i = 0; i < NUM_COLS; i++){
    for(var j = 0; i < NUM_ROWS; i++){
        var tileX = i * 54 + 5;
        var tiley = j * 54 + 40;
        var tileFace = selected.pop();
        var tile = new Tile(tileX, tileY, tileFace);
        tiles.push(tile);
    }
}

var Tile = function(x, y, face){
    this.x = x;
    this.y = y;
    this.width = 70;
    this.face = face;
    this.isFaceUp = false;
};
for (var i = 0; i < tiles.length; i++) {
    tiles[i].isFaceUp = true;
    tiles[i].draw();
}

