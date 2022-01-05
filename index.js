class Message {
    constructor(text = "", created = Date.now()) {
        this.text = text;
        this._created = created;
    }
    get created() {
        return this._created;
    } 
    set created(created) {
        if (!created || isNaN(created)){
            throw new Error("Invalid created")
        }
        this._created = created;
    }
    toString() {
        return "Message\'s toString";
    }
} 

class ImageMessage extends Message {
    constructor(text = "", created = Date.now(),
                url = "", thumbnail = "") {
        super(text, created);
        this.url = url;
        this.thumbnail = thumbnail;
        }
        toString() {
            return `Photo${super.toString()} ` + 
                   `- Url: ${this.url} ` + 
                   `Thumbnail: ${this.thumbnail}`;
        }
}

var text = "Some text";
var created = Date.now();

var duckTypeMessage = {
    text,
    created
};

var emptyMessage = new Message();
var textMessage = new Message("Yesterday message", Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(textMessage);
console.log(photoMessage);

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(textMessage instanceof ImageMessage);
console.log(duckTypeMessage instanceof ImageMessage);