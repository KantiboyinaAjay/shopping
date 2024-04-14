let Hat = [
    {
        id: "H-1",
        image: "assest/Hats/image1.png",
        price: 559,
        name: "cap1",
        amount: 1,
    },

    {
        id:"H-2",
        image: "assest/Hats/image2.png",
        price: 459,
        name: "cap2",
        amount: 1,
    },

    {
        id:"H-3",
        image: "assest/Hats/image3.png",
        price: 659,
        name: "cap3",
        amount: 1,
    },

    {
        id:"H-4",
        image: "assest/Hats/image4.png",
        price: 759,
        name: "cap4",
        amount: 1,
    },
    
    {
        id:"H-5",
        image: "assest/Hats/image5.png",
        price: 859,
        name: "cap5",
        amount: 1,
    },

    {
        id:"H-6",
        image: "assest/Hats/image6.png",
        price: 959,
        name: "cap6",
        amount: 1,
    },

    {
        id:"H-7",
        image: "assest/Hats/image7.png",
        price: 359,
        name: "cap7",
        amount: 1,
    },

    {
        id:"H-8",
        image: "assest/Hats/image8.png",
        price: 159,
        name: "cap8",
        amount: 1,
    },

    {
        id:"H-9",
        image: "assest/Hats/image9.png",
        price: 259,
        name: "cap9",
        amount: 1,
    },
];

export const updatetohat = (id , newdata) =>{
    Hat = Hat.map((item)=>{
        if(item.id === id){
            return {...item , ...newdata}
        }
        return item;
    });
    console.log(Hat);
};
export {Hat};

