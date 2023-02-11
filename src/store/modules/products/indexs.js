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
                            cover: " http://kabisashvili.blogspot.com/p/cxovelebi.html "
                        },
                        {
                            id: 2,
                            name: "10 ამოუხსნელი ფენომენი  ",
                            url: "https://www.youtube.com/watch?v=x2wIhpy6sfA  ",
                            description: "ვიდეოები იქნება მრავალ თემაზე, დედამიწა,გალაქტიკა,კოსმოსი ",
                            cover: " https://yourshot.nationalgeographic.ge/saqartvelos-veluri-buneba/?contest=photo-detail&photo_id=1358  "
                        },
                        {
                            id: 3,
                            name: " სახიფათო ცხოველები უწყინარი გარეგნობით ",
                            url: " https://www.youtube.com/watch?v=VA6WpcxNT-U ",
                            description: "ვიდეოში ვისაუბრებთ სახიფათო და სასიკვდილო ცხოველების შესახებ ",
                            cover: "  https://yourshot.nationalgeographic.ge/saqartvelos-veluri-buneba/?contest=photo-detail&photo_id=1354"
                        },
                        {
                            id: 4,
                            name: "ლამაზი ადგილი დედამიწაზე  ",
                            url: " https://www.youtube.com/watch?v=05P_dKyAcr8&t=6s ",
                            description: " 10.ყინულის გამოქვაბული ვატნაიიოკიუდლ9.ბამბუკის ტყე საგანო8.",
                            cover: " https://yourshot.nationalgeographic.ge/saqartvelos-veluri-buneba/?contest=photo-detail&photo_id=1357 "
    
                        },
                        {
    
                            id: 5,
                            name: " 10 საქართველოს ყველაზე ლამაზი ადგილი ",
                            url: " https://www.youtube.com/watch?v=6EboEbD60xc ",
                            description: "ვიდეოები იქნება მრავალ თემაზე 10 საქართველოს ყველაზე ლამაზი ადგილი  ",
                            cover: " https://yourshot.nationalgeographic.ge/saqartvelos-veluri-buneba/?contest=photo-detail&photo_id=1359 "
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