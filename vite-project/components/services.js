const products = [
    { id: "1", name: "Flor Amarilla", price: 999, category: "Flores", image:'../IMG_2532.jpg' },
    { id: "2", name: "Flor Naranja", price: 999, category: "Flores", image:'../IMG_2530.jpg'},
    { id: "3", name: "Flor Roja", price: 999, category: "Flores", image:'../IMG_2468.jpg' },
    { id: "4", name: "Lentes oscuros", price: 1099, category: "Emoticones", image:'../IMG_2491.jpg' },
    { id: "5", name: "Sonrisa", price: 1099, category: "Emoticones", image:'../IMG_2493.jpg' },
    { id: "6", name: "Kiss", price: 1099, category: "Emoticones", image:'../IMG_2492.jpg' },
    { id: "7", name: "Guiño", price: 1099, category: "Emoticones", image:'../IMG_2490.jpg' },
    { id: "8", name: "Pacman", price: 1999, category: "Juegos", image:'../IMG_2341.jpg' },
    { id: "9", name: "Mario Bros", price: 899, category: "Juegos", image:'../IMG_2341.jpg' },
    { id: "10", name: "Milagrito con alas", price: 899, category: "Milagritos", image:'../IMG_2405.jpg' },
    { id: "11", name: "Milagrito con fuego", price: 899, category: "Milagritos", image:'../IMG_2414.jpg' },
    { id: "12", name: "Milagrito pink", price: 899, category: "Milagritos", image:'../IMG_2409.jpg' },
  ];
  
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const product = products.find((item) => item.id === id);
        if (product) {
          resolve(product);
        } else {
          reject("El producto no se encuentra");
        }
      }, 1000);
    });
  };
  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
        resolve(productsFiltered);
      }, 1000);
    });
  };
  