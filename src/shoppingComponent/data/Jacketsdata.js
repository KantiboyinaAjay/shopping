let Jacket = [
    {
        id: 'J-1',
        image: "assest/Jackets/image1.png",
        price: 2559,
        name: "J1",
        amount: 1,
    },

    {
        id:'J-2',
        image: "assest/Jackets/image2.png",
        price: 2459,
        name: "J2",
        amount: 1,
    },

    {
        id:'J-3',
        image: "assest/Jackets/image3.png",
        price: 2659,
        name: "J3",
        amount: 1,
    },

    {
        id:'J-4',
        image: "assest/Jackets/image4.png",
        price: 2759,
        name: "J4",
        amount: 1,
    },
    
    {
        id:'J-5',
        image: "assest/Jackets/image5.png",
        price: 2859,
        name: "J5",
        amount: 1,
    },

    {
        id:'J-6',
        image: "assest/Jackets/image6.png",
        price: 2959,
        name: "J6",
        amount: 1,
    },

    {
        id:'J-7',
        image: "assest/Jackets/image7.png",
        price: 2359,
        name: "J7",
        amount: 1,
    },

    {
        id:'J-8',
        image: "assest/Jackets/image8.png",
        price: 2159,
        name: "J8",
        amount: 1,
    },

    {
        id:'J-9',
        image: "assest/Jackets/image9.png",
        price: 2259,
        name: "J9",
        amount: 1,
    },
];

export const updatetojacket = (id , newdata) =>{
    Jacket = Jacket.map((item)=>{
        if(item.id === id){
            return {...item , ...newdata};
        }
        return item;
    })
    console.log(Jacket);
}
export {Jacket};

