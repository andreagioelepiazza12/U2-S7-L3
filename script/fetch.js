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
            col.className = "col mb-4"; 
            const card = document.createElement("div");
            card.className = "card border border-primary p-3";   

            const img = document.createElement("img");
            img.className = "card-img-top";
            img.src = book.img;

            const cardBody = document.createElement("div");
                cardBody.className = "card-body";

            const title = document.createElement("p");
            title.innerHTML = book.title;
            const price = document.createElement("p");
            price.innerHTML = book.price;



            const delBut = document.createElement("button");
            delBut.className = "btn btn-danger m-1";
            delBut.innerHTML = "Scarta";

            delBut.onclick = () => col.remove();

            const addToCart = document.createElement("button");
            addToCart.className = "btn btn-success m-1";
            addToCart.innerHTML = "Compra ora";

            cardBody.appendChild(title);
                cardBody.appendChild(price);
                cardBody.appendChild(delBut);
                cardBody.appendChild(addToCart);

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



            card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card); 
                row.appendChild(col);


            

            
        });

    })
    .catch(err => console.log(err));

        
};

window.onload = () => {
    fetchBook();
  };