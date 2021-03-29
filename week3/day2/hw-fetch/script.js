fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
        const memesArray = data.data.memes
        memesArray.forEach(function (meme) {
            const p = `<p class="name">${meme.name}</p>`
            // const p = document.createElement("p")
            // p.classList.add("name")
            // p.innerHTML = meme.name

            const img = `<img width="${meme.width / 3}" height="${meme.height / 3}"  src="${meme.url}" >`

            document.querySelector("#memes-container").innerHTML += p
            // document.querySelector("#memes-container").append(p)
            document.querySelector("#memes-container").innerHTML += img
        })

        const memesElements = document.querySelectorAll(".name")
        memesElements.forEach(memeElement => {
            memeElement.addEventListener("click", function (e) {
                const img = memeElement.nextElementSibling
                img.classList.toggle("hide")

                /*        if (img.style.display === "none") {
                           img.style.display = "block"
                       } else {
                           img.style.display = "none"
                       } */
            })
        })

        const button = document.querySelector("#search")
        button.addEventListener("click", function (e) {
            e.preventDefault()

            const inputText = document.querySelector("#input").value
            console.log(memesArray)
            const result = memesArray.find(meme => {
                return meme.name.toLowerCase().includes(inputText.toLowerCase())
            })
            /* const mapped = memesArray.map(meme => {
                const newMeme = { ...meme }
                newMeme.views = 50000
                return newMeme

            })
            console.log('mapped:', mapped) */
            console.log(result)
            if (result !== undefined) {
                const p = `<p class="name">${result.name}</p>`

                const img = `<img width="${result.width / 3}" height="${result.height / 3}"  src="${result.url}" >`

                document.querySelector("#memes-container").innerHTML = p
                document.querySelector("#memes-container").innerHTML += img
            } else {
                document.querySelector("#memes-container").innerHTML = "<p>Sorry, no memes found..</p>"
            }
        })
    })