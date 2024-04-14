let Gents = [
    {
        id: "G-1",
        image: "assest/men/1.jpg",
        price: 559,
        name: "white T-Shirt",
        amount: 1,
    },

    {
        id:"G-2",
        image: "assest/men/2.jpg",
        price: 459,
        name: "Checks-Shirt",
        amount: 1,
    },

    {
        id:"G-3",
        image: "assest/men/3.jpg",
        price: 659,
        name: "neck-Shirt",
        amount: 1,
    },

    {
        id:"G-4",
        image: "assest/men/4.jpg",
        price: 759,
        name: "US-Polo Shirt",
        amount: 1,
    },
    
    {
        id:"G-5",
        image: "assest/men/5.jpg",
        price: 859,
        name: "T-shirt",
        amount: 1,
    },

    {
        id:"G-6",
        image: "assest/men/6.jpg",
        price: 959,
        name: "Plane shirt",
        amount: 1,
    },
];

export const updatetogents = (id , newdata) => {
    Gents = Gents.map((item) => {
        if(item.id == id){
            return {...item , ...newdata};
        }
        return item;
    });
    console.log(Gents);
};
export  {Gents};

export const Photos = {
    title: "Category",
    image1: "assest/photos/hats.png",
    image2: "assest/photos/jackets.png",
    image3: "assest/photos/men.png",
    image4: "assest/photos/shoes.png",
    image5: "assest/photos/women.png",
}

