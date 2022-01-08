//Const to DOM Elements
const catalog = document.querySelector('.catalog')
const categories = document.querySelector('.categories')
const productListContainer = document.querySelector('.productListContainer')

//Use Params
const URL = window.location.search
const urlParams = new URLSearchParams(URL);
const productURL = urlParams.get('product');
const categoryURL = urlParams.get('category');
const pathname = window.location.pathname
console.log(productURL)
//Components to Render.
const renderProductPLP = (e) => (
    `<a id="${e.id}" href="/product.html?product=${e.id}"
    class="product grid place-content-center hover:shadow-md transition-shadow rounded-lg bg-slate-100 p-3">
        <div class="w-full marker:bg-gray-200 rounded-lg overflow-hidden relative">
            <img src="${e.image}"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                class="product__img w-full h-36 object-center group-hover:opacity-75 object-contain">
            <span
                class="product__discount bg-orange-600 rounded-full p-2 grid place-content-center h-7 w-7 absolute top-0 right-1">
                <p class="text-xs text-white">10%</p>
            </span>
        </div>
        <h3 class="product__name mt-4 text-sm text-gray-700">
            ${e.title}
        </h3>
        <p class="product__price mt-1 text-lg font-medium text-gray-900">
            $ ${e.price}
        </p>
    </a>`
)
const renderCategory = (e) => (
    `<a class="item border-orange-400 border-b-2 border-opacity-0 hover:border-opacity-100 transition-all" href="category.html?category=${e}">
        ${e}
    </a>`
)
const renderPDP = (e) => (
    `<div class="pt-6">
    <!-- Main Grid -->
    <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <!-- Image / Description -->
        <div class="col-span-2 lg:grid-cols-2 grid gap-2">
            <!-- Image Grid -->
            <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                <img src="${e.image}"
                    alt="Two each of gray, white, and black shirts laying flat."
                    class="w-full h-full object-center object-cover">
            </div>
            <!-- Subgrid -->
            <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img src="${e.image}"
                        alt="Model wearing plain black basic tee."
                        class="w-full h-full object-center object-cover">
                </div>
                <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img src="${e.image}"
                        alt="Model wearing plain gray basic tee."
                        class="w-full h-full object-center object-cover">
                </div>
            </div>
            <!-- Description -->
            <div
                class="max-w-2xl mx-auto pt-10 pb-5 px-4 sm:px-6 lg:max-w-7xl lg:pt-5 lg:pb-24 lg:px-8 lg:col-span-2">
                <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
                    <!-- Description and details -->
                    <div>
                        <h3 class="font-semibold text-2xl mb-4">Description</h3>

                        <div class="space-y-6">
                            <p class="text-base text-gray-900">${e.description}.</p>
                        </div>
                    </div>

                    <div class="mt-10">
                        <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                        <div class="mt-4">
                            <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                                <li class="text-gray-400"><span class="text-gray-600">Lorem ipsum </span></li>

                                <li class="text-gray-400"><span class="text-gray-600">Lorem ipsum </span></li>

                                <li class="text-gray-400"><span class="text-gray-600">Lorem ipsum </span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-10">
                        <h2 class="text-sm font-medium text-gray-900">Details</h2>

                        <div class="mt-4 space-y-6">
                            <p class="text-sm text-gray-600">
                                ${e.des}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Side Bar -->
        <div class="mt-4 lg:mt-0 lg:row-span-3 sticky top-0 h-screen pt-4">
            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                ${e.title}
            </h1>
            <p class="text-3xl text-gray-900">$ ${e.price}</p>

            <!-- Reviews -->
            <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                    <!-- Stars -->
                    <div class="flex items-center">

                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p class="sr-only">4 out of 5 stars</p>
                    <a href="#" class="ml-3 text-sm font-medium text-orange-600 hover:text-orange-500">97
                        reviews</a>
                </div>
            </div>

            <form class="mt-10">
                <!-- Sizes -->
                <div class="mt-10">
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm text-gray-900 font-medium">SKU's</h3>
                    </div>

                    <fieldset class="mt-4">
                        <legend class="sr-only">
                            Choose a size
                        </legend>
                        <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                            <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="XS" class="sr-only"
                                    aria-labelledby="size-choice-1-label">
                                <p id="size-choice-1-label">
                                    XS
                                </p>

                                <div class="absolute -inset-px rounded-md pointer-events-none"
                                    aria-hidden="true"></div>
                            </label>

                            <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="S" class="sr-only"
                                    aria-labelledby="size-choice-2-label">
                                <p id="size-choice-2-label">
                                    S
                                </p>

                                <div class="absolute -inset-px rounded-md pointer-events-none"
                                    aria-hidden="true"></div>
                            </label>

                            <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="M" class="sr-only"
                                    aria-labelledby="size-choice-3-label">
                                <p id="size-choice-3-label">
                                    M
                                </p>

                                <div class="absolute -inset-px rounded-md pointer-events-none"
                                    aria-hidden="true"></div>
                            </label>

                            <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="L" class="sr-only"
                                    aria-labelledby="size-choice-4-label">
                                <p id="size-choice-4-label">
                                    L
                                </p>

                                <div class="absolute -inset-px rounded-md pointer-events-none"
                                    aria-hidden="true"></div>
                            </label>

                            <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="XL" class="sr-only"
                                    aria-labelledby="size-choice-5-label">
                                <p id="size-choice-5-label">
                                    XL
                                </p>

                                <div class="absolute -inset-px rounded-md pointer-events-none"
                                    aria-hidden="true"></div>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <button type="submit"
                    class="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Add
                    to bag</button>
            </form>
        </div>
    </div>

</div>`
)

//Fetch Calls to API
const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => {
            if (!res.ok) {
                throw Error('Error in response')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            let product = ""
            data.forEach((e) => {
                product += renderProductPLP(e)
                catalog.innerHTML = product
            })
        })
        .catch(error => {
            console.log(error)
        })

}
const fetchProductsByCategory = () => {
    fetch(`https://fakestoreapi.com/products/category/${categoryURL}`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error in response')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            let product = ""
            data.forEach((e) => {
                product += renderProductPLP(e)
                catalog.innerHTML = product
            })
        })
        .catch(error => {
            console.log(error)
        })

}
const fetchCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
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
    fetch(`https://fakestoreapi.com/products/${productURL}`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error in response')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            let product = ""
            product += renderPDP(data)
            productListContainer.innerHTML = product
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

