const navEmail = document.querySelector('.navbar-email'); //elemento email
const emailMenu = document.querySelector('.desktop-menu'); //menu que se despliega al dar click en emaill (version desktop)
const mobileMenu=document.querySelector('.mobile-menu'); // menu que se despliega del lado izquierdo en la version mobile
const burgerIcon = document.querySelector('.burgerIcon'); // elemento icono en forma de hamburguesa para interactuar dar click y se despliegue el mobile menu
const menuCar = document.querySelector('.car-list-detail'); // menu aside que se despliega del carrito de compras
const carIcon = document.querySelector('.navbar-shopping-cart'); //elemento de carrito de compras 
const mainContainer =document.querySelector('.main-container'); //contenedor principal de todos los productos
const cardsContainer = document.querySelector('.cards-container'); // contenedor de cada producto
const asideProductDetail = document.querySelector('.product-detail'); // detalle del producto desplegado en el lateral
const productDetailCloseIcon = document.querySelector('.product-detail-close'); // icono que cierra el detalle del producto
const productDetailPrice = document.querySelector('#productDetail-price'); //
const productDetailImg = document.querySelector('#productDetail-img');
const productDetailDesciption = document.querySelector('#productDetail-description');

const API= 'https://api.escuelajs.co/api/v1/products'

navEmail.addEventListener('click', toggleDesktopMenu); //evento de escucha click al email en deskptop
burgerIcon.addEventListener('click',toggleMobileMenu); //evento de escucha click al icono de hamburguesa en mobile (menu mobile)
carIcon.addEventListener('click',toggleCarIcon); // evento de escucha click al carrito de compras (mobile y desktop)
mainContainer.addEventListener('click',closeToggles)
productDetailCloseIcon.addEventListener('click',closeProductDetail);

function closeToggles(){
    const menuCarClosed = menuCar.classList.contains('inactive');
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const emailMenuClosed = emailMenu.classList.contains('inactive');
    
    if(!emailMenuClosed){
         emailMenu.classList.add('inactive');
    }
    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!menuCarClosed){
        menuCar.classList.add('inactive');
    }
   
}

function toggleDesktopMenu() {
    const menuCarClosed = menuCar.classList.contains('inactive');
    const asideProductDetailClosed = asideProductDetail.classList.contains('inactive');
    if(!menuCarClosed){
        menuCar.classList.add('inactive');
    }

    if(!asideProductDetailClosed){
        asideProductDetail.classList.add('inactive');
    }
    emailMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu(){
    const menuCarClosed = menuCar.classList.contains('inactive');
    const asideProductDetailClose = asideProductDetail.classList.contains('inactive');

    
    if(!menuCarClosed){
        menuCar.classList.add('inactive');
    }
    if(!asideProductDetailClose){
        asideProductDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarIcon(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const emailMenuClosed = emailMenu.classList.contains('inactive');
    const asideProductDetailClosed = asideProductDetail.classList.contains('inactive');
  
    if(!asideProductDetailClosed){
        asideProductDetail.classList.add('inactive');
    }

    if (!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!emailMenuClosed){
        emailMenu.classList.add('inactive');
    }
    menuCar.classList.toggle('inactive');
}

function openProductDetail()  {

    productDetailImg.setAttribute("src", event.target.src);
    productDetailPrice.innerText = event.target.nextElementSibling.innerText;
    productDetailDesciption.innerText = console.log(event.target.nextSibling);
    

    asideProductDetail.classList.remove( 'inactive' )

}

function closeProductDetail(){
    asideProductDetail.classList.add('inactive');
}



//   -----------  MAIN CONTAINER --------

//      ----Simulando conexion con bd creando un array --

 

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>


{
    "id": 16,
    "title": "Classic White Tee - Timeless Style and Comfort",
    "price": 73,
    "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    "images": [
        "https://i.imgur.com/Y54Bt8J.jpeg",
        "https://i.imgur.com/SZPDSgy.jpeg",
        "https://i.imgur.com/sJv4Xx0.jpeg"
    ],
    "creationAt": "2024-09-22T04:33:34.000Z",
    "updatedAt": "2024-09-22T04:33:34.000Z",
    "category": {
        "id": 1,
        "name": "nuevo",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-09-22T04:33:34.000Z",
        "updatedAt": "2024-09-22T04:39:02.000Z"
    }
}

*/
//creando el html de cada producto y agregandole su respectiva clase (la estructura es como el html comentado antes de este comentario)

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok){
        console.log(response.status)
        return new Error (`Error en respuesta, estado ${response.status}`);
    }
    else{
        return data;
    }
}


function renderProducts(arr){
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.images[0]);


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
        
        const productInfoDivPrice = document.createElement('p');
        productInfoDivPrice.innerText = '$' + product.price;
        const productInfoDivName = document.createElement('p');
        productInfoDivName.innerText = product.title;
        const productInfoDivDescription = document.createElement('p');
        productInfoDivDescription.innerText = product.description;
        productInfoDivDescription.classList.add('inactive');
        

          //metiento el precio y el name dentro de la etiqueta infodiv
        productInfoDiv.append(productInfoDivPrice,productInfoDivName,productInfoDivDescription);

     
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
     
         // metiendo cada elemento creado en dentro de la etiqueta que le corresponde a cada uno
     
         productInfoFigure.appendChild(productInfoFigureImg);
         productInfo.append(productInfoDiv,productInfoFigure);
     
         productCard.append(img,productInfo);
     
         cardsContainer.append(productCard);

         img.addEventListener('click',()=>{
            productInfoDivDescription.classList.remove('inactive');
            openProductDetail();
            productInfoDivDescription.classList.add('inactive');
        });
     
     }
}
const datos = async (urlApi)=>{
    try{
        new URL(urlApi);
        const productos = await fetchData(urlApi);
        const primerosProd = await productos.slice(0,20);
        renderProducts (primerosProd);
        
    }
    catch(error){
        console.log(error);
    }
}

datos(API);


