import './style.css';

const products = [
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg',
    name: 'Lenovo IdeaPad 3',
    price: 559,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1067/10674300/1355-alurin-flex-advance-intel-core-i5-1155g7-16gb-500gb-ssd-156-windows-11-home-comprar.jpg',
    name: 'Alurin Go Start',
    price: 399,
    stars: 5,
    reviews: 150,
    seller: 'Amazon'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1065/10658122/1779-msi-vector-gp77-13vf-022xes-intel-core-i7-13700h-32gb-1tb-ssd-rtx-4060-173.jpg',
    name: 'Acer Nitro V 15 ',
    price: 699,
    stars: 4,
    reviews: 180,
    seller: 'PcComponentes'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1065/10658122/1779-msi-vector-gp77-13vf-022xes-intel-core-i7-13700h-32gb-1tb-ssd-rtx-4060-173.jpg',
    name: 'HP 15-fd0076ns',
    price: 499,
    stars: 3,
    reviews: 200,
    seller: 'MediaMarkt'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1067/10674372/1165-pccom-revolt-4070-fhd-intel-core-i7-13700hx-32gb-1tb-ssd-rtx-4070-173.jpg',
    name: 'Alurin Flex Ad.',
    price: 799,
    stars: 4,
    reviews: 220,
    seller: 'Amazon'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1072/10720412/1198-asus-tuf-gaming-a15-2023-fa507xi-lp024-amd-ryzen-9-7940hs-32gb-512gb-ssd-rtx-4070-156.jpg',
    name: 'Asus Tuf Gaming ',
    price: 299,
    stars: 2,
    reviews: 170,
    seller: 'PcComponentes'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1074/10743152/1166-asus-vivobook-16x-k3605zc-n1267w-intel-core-i7-12650h-16gb-512gb-ssd-rtx-3050-16-caracteristicas.jpg',
    name: 'PcCom Revolt 4060',
    price: 899,
    stars: 2,
    reviews: 300,
    seller: 'Amazon'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1080/10801806/1884-msi-bravo-15-c7ve-288xes-amd-ryzen-5-7535hs-16gb-512gb-ssd-rtx-3050-156.jpg',
    name: 'HP 15-fd0076ns ',
    price: 449,
    stars: 4,
    reviews: 240,
    seller: 'MediaMarkt'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1079/10791958/1178-dell-vostro-3520-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg',
    name: 'Lenovo IdeaPad S.',
    price: 599,
    stars: 3,
    reviews: 280,
    seller: 'Privalia'
  },
  {
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1067/10674903/1670-hp-255-g9-amd-athlon-3020e-8gb-512gb-ssd-156.jpg',
    name: 'Dell Vostro 3520',
    price: 999,
    stars: 5,
    reviews: 190,
    seller: 'PcComponentes'
  }
];

//* HACEMOS FUNCION PARA PINTAR LOS PRODUCTOS

const showProducts = (products) => {
  const PRODUCTS = document.querySelector('.products');

  PRODUCTS.innerHTML = '';

  for (const product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement('h2');
    name.textContent = product.name;

    const price = document.createElement('h3');
    price.textContent = `${product.price} €`;

    const points = document.createElement('div');
    points.classList.add('points');

    const stars = document.createElement('div');
    stars.classList.add('stars');
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('p');
      star.classList.add('star');

      if (i <= product.stars) {
        star.style.backgroundColor = 'yellow';
      } else {
        star.style.backgroundColor = '#b9b8b8';
      }
      stars.appendChild(star);
    }

    const reviews = document.createElement('p');
    reviews.textContent = `(${product.reviews})`;

    const seller = document.createElement('h4');
    seller.textContent = `Vendido y enviado por: ${product.seller}`;

    productCard.appendChild(image);
    productCard.appendChild(name);
    productCard.appendChild(price);
    points.appendChild(stars);
    points.appendChild(reviews);
    productCard.appendChild(points);
    productCard.appendChild(seller);

    PRODUCTS.appendChild(productCard);
  }
};
showProducts(products);

//* CREAMOS LA SECCION DE FILTROS CON LOS FILTROS DE PRECIO Y VENDEDOR

const filters = document.querySelector('.filter');

const sellerFilter = document.createElement('div');
sellerFilter.classList.add('seller-filter');

const priceFilter = document.createElement('div');
priceFilter.classList.add('price-filter');

const sellerSelect = document.createElement('select');
const priceInput = document.createElement('input');
priceInput.setAttribute('type', 'number');
priceInput.placeholder = 'Inserta un precio';

const priceButton = document.createElement('button');
priceButton.textContent = 'BUSCAR';
priceButton.classList.add('price-button');
const cleanButton = document.createElement('button');
cleanButton.textContent = 'LIMPIAR';

cleanButton.classList.add('clean-button');

sellerFilter.appendChild(sellerSelect);
priceFilter.appendChild(priceInput);
priceFilter.appendChild(priceButton);

filters.appendChild(sellerFilter);
filters.appendChild(priceFilter);
filters.appendChild(cleanButton);

//* LE DAMOS FUNCIONALIDAD A LOS FILTROS

//! POR VENDEDOR
const filterProductsBySeller = () => {
  const selectedSeller = sellerSelect.value;
  const filteredProducts = products.filter(
    (product) =>
      product.seller.toLocaleLowerCase() === selectedSeller.toLocaleLowerCase()
  );
  showProducts(filteredProducts);
};
sellerSelect.addEventListener('change', filterProductsBySeller);

const showAllProducts = () => {
  showProducts(products);
};

const showSellerOptions = () => {
  const Sellers = [...new Set(products.map((product) => product.seller))];
  Sellers.forEach((seller) => {
    const option = document.createElement('option');
    option.textContent = seller;
    option.value = seller.toLowerCase();
    sellerSelect.appendChild(option);
  });
};

showAllProducts();
showSellerOptions();

//! POR PRECIO
const filterProductsByPrice = (maxPrice) => {
  const filteredProductsByPrice = products.filter(
    (product) => product.price < maxPrice
  );
  showProducts(filteredProductsByPrice);
};

priceButton.addEventListener('click', () => {
  const maxPrice = parseFloat(priceInput.value);
  if (!isNaN(maxPrice)) {
    filterProductsByPrice(maxPrice);
  } else {
    alert('Por favor, introduce un precio válido.');
  }
});
showProducts(products);

//! BOTÓN PARA LIMPIAR LOS DEMÁS FILTROS
cleanButton.addEventListener('click', () => {
  showProducts(products);
});

showProducts(products);
