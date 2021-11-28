'use strict';

// ******ЗАДАНИЕ 1*********//


/*
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log("ноль");
    }

    else if (i % 2 === 0) {
        console.log("четное");
    } else console.log("нечетное");

}
*/


// ******ЗАДАНИЕ 2********* //

/*const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(`id: ${post.comments[1].rating.dislikes} and text: ${post.comments[1].text}`);*/

// ******ЗАДАНИЕ 3********* //

/*
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product){
    product.price = product.price - ((product.price / 100) * 15);
});

console.log(products);*/

// ******ЗАДАНИЕ 4********* //
/*
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


let hasPhoto = products.filter(photo => "photos" in photo && photo.photos.length > 0);
console.log(hasPhoto);

let sortedPrice = products.sort(function (item1,item2){
    return item1.price - item2.price;
});

console.log(sortedPrice);*/

// ******ЗАДАНИЕ 6********* //
let i = 0;
let t = "";
while (i < 21){
    console.log(t += "x");
    i++;
}



