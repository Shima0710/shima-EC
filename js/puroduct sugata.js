function displayProduct() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get('id');
  const size = urlParams.get('size') || 'S'; // デフォルトでサイズS表示

    // 商品リストをlocalStorageから取得
    const products = [
    
        {
            id: 25,
            title: "SWEET DREAM T-SHIRT / BLACK",
            price: 8800 ,
            image:
              "https://sugata-online.com/cdn/shop/products/bk1_ebdc108d-4b45-4991-8da4-f44eea133e0b_1080x.jpg?v=1673516536",
              
            coment:"tenpleate",
              
          },
          {
            id: 26,
            title: "INNER FLAME HOODIE / BLACK",
            price: 13200,
            image:
               "https://sugata-online.com/cdn/shop/products/INNER_360x.jpg?v=1679139209",
               
              coment:"tenpleate",
          },
          {
            id: 27,
            title: "MOON HOODIE / BLACK",
            price: 13200,
            image:
              "https://sugata-online.com/cdn/shop/products/moon-1_13f91d46-78de-4539-9175-929062834f90_360x.jpg?v=1676958148",
              
            coment:"tenpleate",
          },
          {
            id: 28,
            title: "BUTTERFLY EFFECT HOODIE / BLACK LIGTH BLUE",
            price: 14300,
            image:
             "https://sugata-online.com/cdn/shop/products/blue2_360x.jpg?v=1676188558",
             
            coment:"tenpleate",
          },
          {
            id: 29,
            title: "ACT OF GOD JACKET / GREEN",
            price: 14300,
            image:
               "https://sugata-online.com/cdn/shop/products/actofgod_jacket_360x.jpg?v=1668411946",
               
              coment:"tenpleate",
          },
          {
            id: 30,
            title: "SWEET DREAM T-SHIRT / WHITE GREEN",
            price: 8800,
            image:
              "https://sugata-online.com/cdn/shop/products/tee-grn-yel-1_360x.jpg?v=1661408318",
              
            coment:"tenpleate",
          },
          {
            id: 31,
            title: "WIN & LOSE T-SHIRT / BLACK",
            price: 8800,
            image:
              "https://sugata-online.com/cdn/shop/products/lasvegas_360x.jpg?v=1656398659",
              
            coment:"tenpleate",
          },
          {
            id: 32,
            title: "PERSIA PUFFER JACKET / MULTI",
            price: 22000,
            image:
            "https://sugata-online.com/cdn/shop/products/jkt-1_360x.jpg?v=1646986376",
            
          coment:"tenpleate",
          },
         
      ];
    
    // idを元に商品を検索
    const clickedProduct = products.find(product => product.id === parseInt(productId));

    if (clickedProduct) {
        const productInfoElement = document.getElementById('productInfo');
        productInfoElement.innerHTML = `
            <div class="product-details">
                <img src="${clickedProduct.image}" alt="${clickedProduct.title}" />
            </div>    
            <div class="product-info">
                <h2>${clickedProduct.title}</h2>
                <p>Price: ￥${clickedProduct.price.toFixed(0)}</p>
                <div class="size-select">
                    <label for="size">Select Size:</label>
                    <select id="size">
                        <option value="S" ${size === 'S' ? 'selected' : ''}>S</option>
                        <option value="M" ${size === 'M' ? 'selected' : ''}>M</option>
                        <option value="L" ${size === 'L' ? 'selected' : ''}>L</option>
                    </select>
                </div>
                <div class="add-btn">
                    <p><a class="add-to-cart" data-id="${clickedProduct.id}" data-size="${size}">Add to cart</a></p>
                </div>
                <!-- コメントを表示 -->
                <div class="coment">
                    <p>coment:${clickedProduct.coment}</p>
                </div>
            </div>
        `;
    //デフォルトでサイズSを表示させる
        const sizeSelect = document.getElementById('size');
        sizeSelect.value = size;

        const addToCartButton = document.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', addToCart);
    } else {
        // Handle case where product is not found
        console.error('Product not found');
    }

    if (!['S', 'M', 'L'].includes(size)) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = '有有効なサイズを選択して (S, M, or L).';
        productInfoElement.appendChild(errorElement);
    }
}

displayProduct();





// Products Array
const products = [
  {
    id: 25,
    title: "SWEET DREAM T-SHIRT / BLACK",
    price: 8800 ,
    image:
      "https://sugata-online.com/cdn/shop/products/bk1_ebdc108d-4b45-4991-8da4-f44eea133e0b_1080x.jpg?v=1673516536",
      
    coment:"tenpleate",
      
  },
  {
    id: 26,
    title: "INNER FLAME HOODIE / BLACK",
    price: 13200,
    image:
       "https://sugata-online.com/cdn/shop/products/INNER_360x.jpg?v=1679139209",
       
      coment:"tenpleate",
  },
  {
    id: 27,
    title: "MOON HOODIE / BLACK",
    price: 13200,
    image:
      "https://sugata-online.com/cdn/shop/products/moon-1_13f91d46-78de-4539-9175-929062834f90_360x.jpg?v=1676958148",
      
    coment:"tenpleate",
  },
  {
    id: 28,
    title: "BUTTERFLY EFFECT HOODIE / BLACK LIGTH BLUE",
    price: 14300,
    image:
     "https://sugata-online.com/cdn/shop/products/blue2_360x.jpg?v=1676188558",
     
    coment:"tenpleate",
  },
  {
    id: 29,
    title: "ACT OF GOD JACKET / GREEN",
    price: 14300,
    image:
       "https://sugata-online.com/cdn/shop/products/actofgod_jacket_360x.jpg?v=1668411946",
       
      coment:"tenpleate",
  },
  {
    id: 30,
    title: "SWEET DREAM T-SHIRT / WHITE GREEN",
    price: 8800,
    image:
      "https://sugata-online.com/cdn/shop/products/tee-grn-yel-1_360x.jpg?v=1661408318",
      
    coment:"tenpleate",
  },
  {
    id: 31,
    title: "WIN & LOSE T-SHIRT / BLACK",
    price: 8800,
    image:
      "https://sugata-online.com/cdn/shop/products/lasvegas_360x.jpg?v=1656398659",
      
    coment:"tenpleate",
  },
  {
    id: 32,
    title: "PERSIA PUFFER JACKET / MULTI",
    price: 22000,
    image:
    "https://sugata-online.com/cdn/shop/products/jkt-1_360x.jpg?v=1646986376",
    
  coment:"tenpleate",
  },
     
  ];

  
  //get products list//
  const productList = document.getElementById('productlist');
  const cartItemsElement = document.getElementById('cartItems');
  const cartTotalElement = document.getElementById('cartTotal');

  //store cart items //
  let cart =JSON.parse(localStorage.getItem('cart'))  || [];

  //render products page//
  function renderProducts() {
    productList.innerHTML = products
        .map(
            (product) => `
                <div class="item-products">
                    <a href="Product details-sugata.html?id=${product.id}"> <!-- Product details-breth.htmlへのリンク -->
                        <img src="${product.image}" alt="${product.title}" class="product-img">
                    </a>
                     <div class="product-info">
                        <h2 class="product-title">
                            <a href="Product details-sugata.html?id=${product.id}">${product.title}</a> <!-- Product details-breth.htmlへのリンク -->
                        </h2>
                        <p class="product-price">￥${product.price.toFixed(0)}</p>
                     </div>
                </div>
            `
        )
        .join("");

    const addToCartButtons = document.getElementsByClassName('add-to-cart');
    for (let i = 0; i < addToCartButtons.length; i++) {
        const addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener('click', addToCart);
    }
}



// add to cart
function addToCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const size = document.getElementById('size').value; // サイズを取得
    const product = products.find((product) => product.id === productID);

    if (product) {
        const existingItem = cart.find((item) => item.id === productID && item.size === size);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                size: size, // サイズを追加
                
              coment:"tenpleate",
                quantity: 1,
            };
            cart.push(cartItem);
        }
        // change add to cart text to added
        event.target.textContent = "Added";
        updateCartIcon();
        saveToLocalStorage();
        renderCartItems();
        calculateCartTotal();
    }
}

//rmeove from cart
function removeFromCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const size = cart.find((item) => item.id === productID).size;

    // カートからIDとサイズが一致する商品のみを削除
    cart = cart.filter((item) => item.id !== productID || item.size !== size);

    saveToLocalStorage();
    renderCartItems();
    calculateCartTotal();
    updateCartIcon();
}

//quantity change
function changeQuantity(event){
    const productID = parseInt(event.target.dataset.id);
    const quantity = parseInt(event.target.value);

    if(quantity>0){
        const cartItem = cart.find((item) => item.id === productID);
        if(cartItem){
            cartItem.quantity = quantity;
            saveToLocalStorage();
            calculateCartTolal();
            updateCartIcon();
        }
    }
}


//save to local storage
function saveToLocalStorage(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

// product cart page
function renderCartItems() {
    cartItemsElement.innerHTML = cart
        .map(
            (item) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}" />
                    <div class="cart-item-info">
                        <h2 class="cart-item-title">${item.title}</h2>
                        <p>Size: ${item.size}</p> <!-- サイズを表示 -->
                        <input
                            class="cart-item-quantity"
                            type="number"
                            name=""
                            min="1"
                            value="${item.quantity}"
                            data-id="${item.id}"
                        />
                    </div>
                    <h2 class="cart-item-price">￥${item.price}</h2>
                    <button class="remove-from-cart" data-id="${item.id}">Remove</button>
                </div>
            `
        )
        .join("");
        //remove from cart
        const removetButtons = document.getElementsByClassName('remove-from-cart');
    for (let i = 0; i < removetButtons.length; i++) {
        const removetButton =removetButtons[i];
        removetButton.addEventListener('click', removeFromCart);
    }
    //quantity change
        const quantityInputs = document.querySelectorAll('.cart-item-quantity')
        quantityInputs.forEach((input) => {
            input.addEventListener("change",changeQuantity);
        });
}

//cloulate total
function calculateCartTolal(){
    const total = cart.reduce((sum,item) => sum+item.price * item.quantity, 0);
    cartTotalElement.textContent = `合計: ￥${total.toFixed(0)}`;
}

// check cart
if(window.location.pathname.includes('cart.html')) {
    renderCartItems();
    calculateCartTolal();
} else {    
    renderProducts();
}

//cart icon quantity
const cartIcon = document.getElementsByClassName('cart-icon')

function updateCartIcon() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartIcon = document.getElementById("cart-icon");
  cartIcon.setAttribute("data-quantity", totalQuantity);
}

// Example: Update cart icon on cart change
function updateCartIconcartChange() {
  updateCartIcon();
}

window.addEventListener('storage', updateCartIconcartChange);

// Example: Render products and cart items
renderProducts();
renderCartItems();
calculateCartTotal();
updateCartIcon();








//背背景
particlesJS("particles-js", {
    "particles":{
      "number":{
        "value":946,//この数値を変更すると星の数が増減できる
        "density":{
          "enable":true,
          "value_area":800
        }
      },
      "color":{
        "value":"#ffffff"
      },
      "shape":{
        "type":"circle",//形状はcircleを指定
        "stroke":{
          "width":0
        },
        },
      "opacity":{
        "value":1,//シェイプの透明度
        "random":true,//シェイプの透明度をランダムにする
        "anim":{
          "enable":true,//シェイプの透明度をアニメーションさせる
          "speed":3,//シェイプの透明度をアニメーションさせる
          "opacity_min":0,//透明度の最小値０
          "sync":false//全てを同時にアニメーションさせない
        }
      },
      "size":{
        "value":2,
        "random":true,
        "anim":{
          "enable":false,
          "speed":4,
          "size_min":0.3,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
      },
      "move":{
        "enable":true,
        "speed":120,//この数値を小さくするとゆっくりな動きになる
      "direction":"none",//方向指定なし
      "random":true,//動きはランダムに
      "straight":true,//動きをとどめる
        "out_mode":"out",
        "bounce":false,
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":600
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
        },
        "onclick":{
          "enable":false,
        },
        "resize":true
      }
    },
    "retina_detect":true
  });