const urlAPI = 'https://api-bsale-test-chescobar.herokuapp.com/'

//Const to DOM Elements
const catalog = document.querySelector('.catalog')
const categories = document.querySelector('.categories')
const productListContainer = document.querySelector('.productListContainer')
const spinner = document.querySelector('.spinner')

//Use Params
const URL = window.location.search
const urlParams = new URLSearchParams(URL);
const productURL = urlParams.get('product');
const categoryURL = urlParams.get('category');
const pathname = window.location.pathname


//Menu
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})

//Components to Render.
const renderProductPLP = (e) => {
    e.map((e) => {
        if (e.discount) {
            if (e.url_image) {
                catalog.innerHTML += `<a id="${e.id}" href="/product.html?product=${e.id}" class="product grid place-content-center hover:shadow-md transition-shadow rounded-lg bg-slate-100 p-3 relative">
                <span class="product__discount bg-orange-600  p-2 grid place-content-center h-7 w-max font-bold absolute top-0 right-1">
                    <p class="text-xs text-white">${e.discount} %</p>
                </span>
                    <div class="w-full marker:bg-gray-200 rounded-lg overflow-hidden ">
                        <img src="${e.url_image}"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="product__img w-full h-36 object-center group-hover:opacity-75 object-contain">
                    </div>
                    <h3 class="product__name mt-4 text-sm text-gray-700">
                        ${e.name}
                    </h3>
                    <div class="flex gap-2">
                    <p class="product__price mt-1 text-lg font-medium text-gray-600 line-through">
                        $ ${(((e.discount * e.price) / 100) + e.price)}
                    </p>
                    <p class="product__price mt-1 text-lg font-semibold text-orange-600">
                        $ ${e.price}
                    </p>
                    </div>
                    
                </a>`}
            else {
                catalog.innerHTML += `<a id="${e.id}" href="/product.html?product=${e.id}" class="product grid place-content-center hover:shadow-md transition-shadow rounded-lg bg-slate-100 p-3 relative">
                <span class="product__discount bg-orange-600  p-2 grid place-content-center h-7 w-max font-bold absolute top-0 right-1">
                    <p class="text-xs text-white">${e.discount} %</p>
                </span>
                    <div class="w-full marker:bg-gray-200 rounded-lg overflow-hidden ">
                        <img src="./src/default.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="product__img w-full h-36 object-center group-hover:opacity-75 object-contain">
                    </div>
                    <h3 class="product__name mt-4 text-sm text-gray-700">
                        ${e.name}
                    </h3>
                    <div class="flex gap-2">
                    <p class="product__price mt-1 text-lg font-medium text-gray-600 line-through">
                        $ ${(((e.discount * e.price) / 100) + e.price)}
                    </p>
                    <p class="product__price mt-1 text-lg font-semibold text-orange-600">
                        $ ${e.price}
                    </p>
                    </div>
                    
                </a>`
            }
        } else {
            if (e.url_image) {
                catalog.innerHTML += `<a id="${e.id}" href="/product.html?product=${e.id}" class="product grid place-content-center hover:shadow-md transition-shadow rounded-lg bg-slate-100 p-3 relative">
                    <div class="w-full marker:bg-gray-200 rounded-lg overflow-hidden ">
                        <img src="${e.url_image}"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="product__img w-full h-36 object-center group-hover:opacity-75 object-contain">
                    </div>
                    <h3 class="product__name mt-4 text-sm text-gray-700">
                        ${e.name}
                    </h3>
                    <div class="flex gap-2">
                    <p class="product__price mt-1 text-lg font-semibold text-orange-600">
                        $ ${e.price}
                    </p>
                    </div>
                    
                </a>`
            } else {
                catalog.innerHTML += `<a id="${e.id}" href="/product.html?product=${e.id}" class="product grid place-content-center hover:shadow-md transition-shadow rounded-lg bg-slate-100 p-3 relative">
                    <div class="w-full marker:bg-gray-200 rounded-lg overflow-hidden ">
                        <img src="./src/default.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="product__img w-full h-36 object-center group-hover:opacity-75 object-contain">
                    </div>
                    <h3 class="product__name mt-4 text-sm text-gray-700">
                        ${e.name}
                    </h3>
                    <div class="flex gap-2">
                    <p class="product__price mt-1 text-lg font-semibold text-orange-600">
                        $ ${e.price}
                    </p>
                    </div>
                    
                </a>`
            }
        }
    })
}

const renderCategory = (e) => (
    // `<a class="item border-orange-400 border-b-2 border-opacity-0 hover:border-opacity-100 transition-all uppercase" href = "category.html?category=${e.id}" >
    // ${e.name}
    // </a> `
    `<a href="category.html?category=${e.id}"
    class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold transition-all border-b-2 border-opacity-0 border-white hover:border-opacity-100 capitalize">
    ${e.name}
    </a>`
)
const renderPDP = (e) => {
    const productName = document.querySelector('.product__details__container .product__name')
    const productPrice = document.querySelector('.product__details__container .product__price')
    const productDiscount = document.querySelector('.product__details__container .product__discount')
    const productImages = document.querySelectorAll('.product__image__container img')
    const productDescription = document.querySelector('.product__description__container .product__description')
    const productSpecification = document.querySelector('.product__specifications__container li span')
    const discount = (((e.discount * e.price) / 100) + e.price)
    productName.innerHTML = e.name
    productPrice.innerHTML = '$' + e.price

    e.discount > 0
        ? (
            productDiscount.innerHTML = '$' + discount,
            productDiscount.classList.remove('animate-pulse', 'bg-gray-300', 'text-opacity-0')
        )
        : (productDiscount.innerHTML = "")

    e.url_image
        ? (
            productImages.forEach(element => {
                element.setAttribute('src', e.url_image)
                element.classList.remove('animate-pulse', 'bg-gray-300', 'text-opacity-0')
            })
        ) : (
            productImages.forEach(element => {
                element.setAttribute('src', './src/default.jpg')
                element.classList.remove('animate-pulse', 'bg-gray-300', 'text-opacity-0')
            }))

    productName.classList.remove('animate-pulse', 'bg-gray-300', 'text-opacity-0')
    productPrice.classList.remove('animate-pulse', 'bg-gray-300', 'text-opacity-0')
    productDescription.classList.remove('animate-pulse', 'bg-gray-300', 'text-opacity-0')
    productSpecification.classList.remove('animate-pulse', 'bg-gray-300', 'text-opacity-0')
}


//Fetch Calls to API
const fetchProducts = () => {
    fetch(`${urlAPI}products`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error in response')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            catalog.classList.add('grid-cols-1', 'gap-y-10', 'sm:grid-cols-2', 'gap-x-6', 'lg:grid-cols-3', 'xl:grid-cols-4', 'xl:gap-x-8')
            catalog.classList.remove('place-items-center')
            spinner.classList.add('hidden')
            renderProductPLP(data)
        })
        .catch(error => {
            console.log(error)
        })

}
const fetchProductsByCategory = () => {
    fetch(`${urlAPI}products/category/${categoryURL}`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error in response')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            catalog.classList.add('grid-cols-1', 'gap-y-10', 'sm:grid-cols-2', 'gap-x-6', 'lg:grid-cols-3', 'xl:grid-cols-4', 'xl:gap-x-8')
            catalog.classList.remove('place-items-center')
            spinner.classList.add('hidden')
            renderProductPLP(data)
        })
        .catch(error => {
            console.log(error)
        })

}
const fetchCategories = () => {
    fetch(`${urlAPI}categories`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error in response')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            let category = ""
            data.forEach((e) => {
                category += renderCategory(e)
                categories.innerHTML = category
            })
        })
        .catch(error => {
            console.log(error)
        })
}
const fetchDetailProduct = () => {
    fetch(`${urlAPI}products/${productURL}`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error in response')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            renderPDP(data[0])
        })
        .catch(error => {
            console.log(error)
        })
}

// Reading urlParams to optimaze
switch (pathname) {
    case "/":
        fetchCategories()
        fetchProducts()
        break;
    case "/category.html":
        fetchCategories()
        fetchProductsByCategory()
        break;
    case "/product.html":
        fetchCategories()
        fetchDetailProduct()
        break;
    default:
        fetchProducts()
        fetchCategories()
        break;
}

