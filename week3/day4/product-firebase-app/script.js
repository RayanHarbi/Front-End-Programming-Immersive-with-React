const db = firebase.firestore()

function getProducts() {

    document.querySelector("#products").innerHTML = ""
    db.collection('test-products').where('category', '==', 'furniture').get()
        .then(products => {
            products.forEach(product => {
                const productData = product.data()
                console.log(productData)

                const productElement = `
            <div id="${product.id}" class="card col mx-4 mt-5">
                <img src="${productData.imageUrl}" class="card-img-top img-thumbnail" alt="...">
                <div class="card-body">
                <h5 class="card-title">${productData.name}</h5>
                <p class="card-text">${productData.description}</p>
                <a href="#" onclick="viewProduct()" class="btn btn-primary">View Post</a>
            </div>
            `
                document.querySelector("#products").innerHTML += productElement
            })
        })

}

getProducts()

function viewProduct() {
    console.log("click")

}

document.querySelector("#add-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const name = document.querySelector("#name").value
    const description = document.querySelector("#description").value
    const quantity = document.querySelector("#quantity").value
    const price = document.querySelector("#price").value
    const imageUrl = document.querySelector("#imageUrl").value

    db.collection('test-products').add({
        name: name,
        quantity: quantity,
        description: description,
        price: price,
        imageUrl: imageUrl,
        category: 'furniture'
    })
        .then((newProduct) => {
            console.log("Document written with ID: ", newProduct.id);
            getProducts()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

})