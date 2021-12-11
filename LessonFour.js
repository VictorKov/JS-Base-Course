'use strict';


// ********* ЗАДАНИЕ 1.1 ******** //


/*function Product(name,price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function (){
    return this.price - (this.price / 100 * 25);

}

let prod1 = new Product('Juice', 200);
console.log(prod1.make25PercentDiscount());*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        return this.price - (this.price / 100 * 25);
    }
}

let prod1 = new Product('Juice', 200);
console.log(prod1.make25PercentDiscount());

// ********* ЗАДАНИЕ 1.2 ******** //

/*
function Post(author,text,date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    return this.text = text;
}

function AttachedPost(author,text,date) {
    Post.call(this,author,text,date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    return this.highlighted = true;
}

let post1 = new AttachedPost('Petr',"123",'1.1.21');
console.log(post1.text);
console.log(post1.edit('1234'));
console.log(post1.makeTextHighlighted());*/

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        return this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted(){
        return this.highlighted = true;
    }
}

let post1 = new AttachedPost('Petr',"123",'1.1.21');
console.log(post1.text);
console.log(post1.edit('1234'));
console.log(post1.makeTextHighlighted());
