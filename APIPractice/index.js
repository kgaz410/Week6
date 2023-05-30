    const prodContainer = document.getElementById("products-container")
    const postContainer = document.getElementById("posts-container")    

    const API_URL = "https://dummyjson.com/products"

    const fetchAllProducts = async () => {
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            // console.log(data)

            return data

        } catch (error) {
            console.log(error)
        }
    }
    
    // fetchAllProducts()
    
    const renderAllProducts = (products) => {
        products.forEach((products) => {
            const prodElem = document.createElement("p")

            prodElem.innerText = products.title
            
            prodContainer.appendChild(prodElem)
        });



    }



    const init = async () => {
        const products = await fetchAllProducts();
        renderAllProducts(products)
        console.log(products)


    }
    
    init()
    
    
    
    
    // async function fetchProducts() {
    //     try {
    //         let response = await fetch("https://dummyjson.com/products");
    
    //         let translatedData = await response.json(); 
    
    //         let actualData = translatedData.results 
    
    //        return actualData;
    //     } catch (error) {
    //       console.error(error);  
    //     }
    // }
    

    // async function renderData() {
    //     let prodContainer = document.getElementById("products-container")
    
    //     let myProducts = await fetchProducts();
    
    //     for (let i = 0; i < myProducts.length; i++) {
         
    //         let myCurrObj = myProducts[i];
            
    //         let newElement = document.createElement("p");
    
    //         newElement.innerText = myCurrObj.title;
    //         newElement.style.border = "2px solid blue";
    
    //         prodContainer.appendChild(newElement)
    //     }
    // }
    
    // renderData(); 



