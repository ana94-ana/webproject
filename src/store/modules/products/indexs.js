import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

const productsModule={
        state() {
            return {
                products: {
                    name: "Movies",
                    action: true,
                    data: [
                        {
                            id: 1,
                            name: "★ ტოპ ფაქტები ★",
                            url: "https://www.youtube.com/watch?v=Mra2YR_wWXA",
                            description: "ვიდეოში გაგაცნობთ ყველაზე ჭკვიანი ცხოველებს მსოფლიოში",
                            cover: " https://4.bp.blogspot.com/-lUSdA5NX1Bc/WNNYURhiJ7I/AAAAAAAAA1E/F6nn5vBdagcNfuh7Xofz7oo8oD5SMHSawCLcB/s1600/1502386.jpg "
                        },
                        {
                            id: 2,
                            name: "10 ამოუხსნელი ფენომენი  ",
                            url: "https://www.youtube.com/watch?v=x2wIhpy6sfA  ",
                            description: "ვიდეოები იქნება მრავალ თემაზე, დედამიწა,გალაქტიკა,კოსმოსი ",
                            cover: " https://tia.ge/storage/media/image/2023-01-30/640x360/402735f0-a0c8-11ed-b48d-933fd8a2f67f.jpg "
                        },
                        {
                            id: 3,
                            name: " სახიფათო ცხოველები უწყინარი გარეგნობით ",
                            url: " https://www.youtube.com/watch?v=VA6WpcxNT-U ",
                            description: "ვიდეოში ვისაუბრებთ სახიფათო და სასიკვდილო ცხოველების შესახებ ",
                            cover: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQYLuW2PlaRsDOmDajriK6pSWe0_q18Y1Cw&usqp=CAU"
                        },
                        {
                            id: 4,
                            name: "ლამაზი ადგილი დედამიწაზე  ",
                            url: " https://www.youtube.com/watch?v=05P_dKyAcr8&t=6s ",
                            description: " 10.ყინულის გამოქვაბული ვატნაიიოკიუდლ9.ბამბუკის ტყე საგანო8.",
                            cover: " https://cdn.fortuna.ge/app/uploads/2019/09/maxresdefault-2019-09-24_09-26-25_731428.jpg"
    
                        },
                        {
    
                            id: 5,
                            name: " 10 საქართველოს ყველაზე ლამაზი ადგილი ",
                            url: " https://www.youtube.com/watch?v=6EboEbD60xc ",
                            description: "ვიდეოები იქნება მრავალ თემაზე 10 საქართველოს ყველაზე ლამაზი ადგილი  ",
                            cover: " https://static.conciergetbilisi.com/Uploads/editor-image_784fa1a5-42e6-4c95-9b9b-3bd94340b260.jpeg"
                        }
                    ]
                },
                cart: {
                    name: "Watch List",
                    action: false,
                    data: []
                }
    
            }
        },
        getters,
        mutations,
        actions,
        
  
}

export default productsModule