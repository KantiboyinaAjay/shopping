const Shoe = [
    {
        id: 'S-1',
        image: "assest/Shoes/image1.png",
        price: 1559,
        name: "hrx-sneakers",
        amount: 1,
    },

    {
        id:'S-2',
        image: "assest/Shoes/image2.png",
        price: 1459,
        name: "sneakers",
        amount: 1,
    },

    {
        id:'S-3',
        image: "assest/Shoes/image3.png",
        price: 1659,
        name: "roadster casual",
        amount: 1,
    },

    {
        id:'S-4',
        image: "assest/Shoes/image4.png",
        price: 1759,
        name: "sports shoe",
        amount: 1,
    },
    
    {
        id:'S-5',
        image: "assest/Shoes/image5.png",
        price: 1859,
        name: "formal loafer shoe",
        amount: 1,
    },

    {
        id:'S-6',
        image: "assest/Shoes/image6.png",
        price: 1959,
        name: "loafer shoe",
        amount: 1,
    },

    {
        id:'S-7',
        image: "assest/Shoes/image7.png",
        price: 2359,
        name: "wooten boots",
        amount: 1,
    },

    {
        id:'S-8',
        image: "assest/Shoes/image8.png",
        price: 2159,
        name: "boots",
        amount: 1,
    },

    {
        id:'S-9',
        image: "assest/Shoes/image9.png",
        price: 2259,
        name: "crocs",
        amount: 1,
    },
];
export const updatetoshoe = (id , newdata) =>{
    Shoe=Shoe.map((item)=>{
        if(item.id === id){
            return {...item , ...newdata};
        }
        return item;
    })
    console.log(Shoe);
}
export {Shoe};