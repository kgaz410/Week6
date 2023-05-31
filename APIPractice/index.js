    async function fetchProducts() {
        try {
            let response = await fetch("https://dummyjson.com/products/");
    
            let translatedData = await response.json(); 
    
            let actualData = translatedData.results 
            console.log(actualData)
    
           return actualData;
        } catch (error) {
          console.error(error);  
        }
    }
    

    async function renderProducts() {
        let prodContainer = document.getElementById("products-container")
    
        let myProducts = await fetchProducts();
    
        for (let i = 0; i < myProducts.length; i++) {
         
            let myCurrObj = myProducts[i];
            
            let newElement = document.createElement("p");
    
            newElement.innerText = `${myCurrObj.title} ${myCurrObj.price}`
            newElement.style.border = "3px solid blue";
    
            prodContainer.appendChild(newElement)
        }
    }
    
    renderProducts(); 


    async function fetchPostData() {
        try {

          let postResponse = await fetch('https://dummyjson.com/posts/');
         
          let translatedPostData = await postResponse.json();
         
          let actualPostData = translatedPostData;
          console.log(actualPostData);
         
          return actualPostData;
        } catch (error) {
          console.error(error);
          
        }
      }
      
      async function renderPost() {
        let postContain = document.getElementById("posts-container");
        let myPosts = await fetchPostData();
      
        for(let i = 0; i < myPosts.length; i++){
            let myCurrPostObj= myPosts[i];
          
            let newPostEle = document.createElement('p');
          
            newPostEle.innerText = myCurrPostObj.title;
          
            newPostEle.style.border = "3px solid pink";
          
            postContain.appendChild(newPostEle);
        };
      }

      renderPost()



