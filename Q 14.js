var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger 
Games',
readingStatus: false
}
];
library.forEach(book => {
console.log(`"${book.title}" by ${book.author} - Reading 
status: ${book.readingStatus ? 'Read' : 'Not read'}`);
});
//output: "The Road Ahead" by Bill Gates - Reading status: Read
//"Walter Isaacson" by Steve Jobs - Reading status: Read
//"Mockingjay: The Final Book of The Hunger Games" by Suzanne 
//Collins - Reading status: Not read
