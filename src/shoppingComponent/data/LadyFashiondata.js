let Ladies = [
    {
        id: 'L-1',
        image: "assest/women/1.jpg",
        price: 1559,
        name: "Red Top puff sleeve",
        amount: 1,
    },

    {
        id:'L-2',
        image: "assest/women/2.jpg",
        price: 1459,
        name: "neck-Shirt",
        amount: 1,
    },

    {
        id:'L-3',
        image: "assest/women/3.jpg",
        price: 1659,
        name: "Orange Top",
        amount: 1,
    },

    {
        id:'L-4',
        image: "assest/women/4.jpg",
        price: 1759,
        name: "Black Neck",
        amount: 1,
    },
    
    {
        id:'L-5',
        image: "assest/women/5.jpg",
        price: 1859,
        name: "Blue top sleeve",
        amount: 1,
    },

    {
        id:'L-6',
        image: "assest/women/6.jpg",
        price: 1959,
        name: "Bell Sleeve",
        amount: 1,
    },

    {
        id:'L-7',
        image: "assest/women/7.jpg",
        price: 2059,
        name: "Regular fit T-shirt",
        amount: 1,
    },

    {
        id:'L-8',
        image: "assest/women/8.jpg",
        price: 2159,
        name: "High Neck",
        amount: 1,
    },
];
export const updatetolady = (id , newdata) =>{
    Ladies=Ladies.map((item)=>{
        if(item.id === id){
            return {...item , ...newdata};
        }
        return item;
    })
    console.log(Ladies);
}
export {Ladies};