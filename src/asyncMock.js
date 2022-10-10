const products = [{
    id: "1",
    name: "RTX 3090",
    price: 340000,
    category: "PlacasDeVideo",
    img: "https://www.venex.com.ar/products_images/1639582516_placa-de-video-gigabyte-nvidia-geforce-rtx-3090-gaming-24g-oc.jpg",
    stock: 10,
    descripcion:"Placa de video Nvidia Gigabyte 24 GB"
},

{
    id: "2",
    name: "RTX 3060",
    price: 160000,
    category: "PlacasDeVideo",
    img: "https://www.comeros.com.ar/wp-content/uploads/2022/05/COMEROS-ZOTAC-ZT-A30600E-10M-12.jpg",
    stock: 6,
    descripcion:"Placa de video Nvidia Zotag Gamaing 12 GB"

},

{
    id: "3",
    name: "GTX 1660super",
    price: 90000,
    category: "PlacasDeVideo",
    img:"https://www.venex.com.ar/products_images/1608579945_placadevideomsinvidiageforcegtx1660superventusxsoc6g.jpg",
    stock: 20,
    descripcion:"Placa de video Nvidia MSI 6 GB"

},

{
    id: "4",
    name: "RTX 3090 TI",
    price: 450000,
    category: "PlacasDeVideo",
    img:"https://m.media-amazon.com/images/I/81-GWj0nEkL.jpg",
    stock: 13,
    descripcion:"Placa de video Nvidia EVGA 24 GB"

},

{
    id: "5",
    name: "Ipohne 14 ProMax",
    price: 550000,
    category: "Celulares",
    img:"https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_SX522_.jpg",
    stock: 5,
    descripcion:"Iphone 14 Pro Max 512GB"

},

{
    id: "6",
    name: "Ipohne 13 Pro",
    price: 450000,
    category: "Celulares",
    img:"https://www.macstation.com.ar/img/productos/2594-1.jpg",
    stock: 5,
    descripcion:"Iphone 13 Pro 512GB"

},

{
    id: "7",
    name: "Ryzen 7 5800X3D ",
    price: 95000,
    category: "Procesadores",
    img:"https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-7802771.jpg",
    stock: 5,
    descripcion:"procesador AMD de 8 nucleos 16 hilo 4.5GHz Turbo socket AM4"

},

{
    id: "8",
    name: "Ryzen 5 5600X",
    price: 51000,
    category: "Procesadores",
    img:"https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_27-09-2021-12-09-14-ryzen-5-5600x.jpg",
    stock: 6,
    descripcion:"procesador AMD de 6 nucleos 12 hilo 4.6GHz Turbo socket AM4"

},

];


export const getProducts = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 1000)
    })
};

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === id ))
        }, 1000)
    })
};