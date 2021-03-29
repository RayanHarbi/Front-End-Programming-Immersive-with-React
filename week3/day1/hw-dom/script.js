const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        image: "https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        image: "https://coinstarterbox.com/wp-content/uploads/2020/08/used-books-store-2.jpg"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true,
        image: "https://coinstarterbox.com/wp-content/uploads/2020/08/used-books-store-2.jpg"

    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true,
        image: "https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png"

    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true,
        image: "https://coinstarterbox.com/wp-content/uploads/2020/08/used-books-store-2.jpg"

    }
]

const h1 = document.createElement("h1")
const div = document.querySelector(".favourtieBooks")
h1.innerHTML = "My Book List"
div.append(h1)

books.forEach(book => {
    const container = document.createElement("div")
    const image = `<img width="300" src="${book.image}" >`
    container.innerHTML += image

    const p = "<p>" + book.title + " by " + book.author + "</p>"
    //const p2 = `<p>${book.title} by ${book.author}</p>`
    console.log("p", p)
    console.log("p2", p2)

    container.innerHTML += p
    div.append(container)
})
