const fetchBook = () => {

    fetch("https://striveschool-api.herokuapp.com/books")

    .then(responseObj => {
        console.log(responseObj);

        if(responseObj.ok){
            return responseObj.json();
        }
    })

    .then(bookObj => {

        console.log(bookObj);

        const row = document.getElementById("card-container");

        const listContainer = document.getElementById("list-container");

        const cartList = document.createElement("ul");

        listContainer.appendChild(cartList);


        bookObj.forEach(book => {

            const col = document.createElement("div");
            col.className = "col";  
            const img = document.createElement("img");
            img.style.width = "100%"
            img.src = book.img;
            const title = document.createElement("p");
            title.innerHTML = book.title;
            const price = document.createElement("p");
            price.innerHTML = book.price;



            const delBut = document.createElement("button");
            delBut.innerHTML = "Scarta";

            delBut.onclick = () => col.remove();

            const addToCart = document.createElement("button");
            addToCart.innerHTML = "Compra ora";

            addToCart.onclick = () => {
                const cartBook = document.createElement("li");
                    cartBook.classList.add("cart-Book");

                    const cartTitle = document.createElement("span");
                    cartTitle.innerHTML = `${book.title} - ${book.price}`;

                    const removeButton = document.createElement("button");
                    removeButton.innerHTML = "Rimuovi";

                    removeButton.onclick = () => cartBook.remove();

                    cartBook.appendChild(cartTitle);
                    cartBook.appendChild(removeButton);

                    cartList.appendChild(cartBook);


            };



            col.appendChild(img);
            col.appendChild(title);
            col.appendChild(price);
            col.appendChild(delBut);
            col.appendChild(addToCart);
            row.appendChild(col);


            

            
        });

    })
    .catch(err => console.log(err));

        
};

window.onload = () => {
    fetchBook();
  };