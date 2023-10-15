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

    asideProductDetail.classList.remove( 'inactive' )

}

function closeProductDetail(){
    asideProductDetail.classList.add('inactive');
}


//   -----------  MAIN CONTAINER --------

//      ----Simulando conexion con bd creando un array --

const productList = [];
 
// agregando articulos al array (como objetos por cada elemento) 
productList.push({
    name: 'Bike',
    price: 1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bike Helmet',
    price: 500,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

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

*/
//creando el html de cada producto y agregandole su respectiva clase (la estructura es como el html comentado antes de este comentario)

function renderProducts(arr){
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click',openProductDetail);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
        
        const productInfoDivPrice = document.createElement('p');
        productInfoDivPrice.innerText = '$' + product.price;
        const productInfoDivName = document.createElement('p');
        productInfoDivName.innerText = product.name;
          //metiento el precio y el name dentro de la etiqueta infodiv
        productInfoDiv.append(productInfoDivPrice,productInfoDivName);
     
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
     
         // metiendo cada elemento creado en dentro de la etiqueta que le corresponde a cada uno
     
         productInfoFigure.appendChild(productInfoFigureImg);
         productInfo.append(productInfoDiv,productInfoFigure);
     
         productCard.append(img,productInfo);
     
         cardsContainer.append(productCard);
     
     }
}

renderProducts(productList);


