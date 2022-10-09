const products = [{
    id: "1",
    name: "RTX 3090",
    price: 340000,
    category: "Placas de Video",
    img: "https://www.venex.com.ar/products_images/1639582516_placa-de-video-gigabyte-nvidia-geforce-rtx-3090-gaming-24g-oc.jpg",
    stock: 10,
    descripcion:"Placa de video Nvidia Gigabyte 24 GB"
},
{
    id: "1",
    name: "RTX 3060",
    price: 160000,
    category: "Placas de Video",
    img: "https://www.comeros.com.ar/wp-content/uploads/2022/05/COMEROS-ZOTAC-ZT-A30600E-10M-12.jpg",
    stock: 6,
    descripcion:"Placa de video Nvidia Zotag Gamaing 12 GB"
},
{
    id: "1",
    name: "GTX 1660super",
    price: 90000,
    category: "Placas de Video",
    img:"https://www.venex.com.ar/products_images/1608579945_placadevideomsinvidiageforcegtx1660superventusxsoc6g.jpg",
    stock: 20,
    descripcion:"Placa de video Nvidia MSI 6 GB"

},
];


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
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