Challenge.create!([
  {name: "Little Black Dress", category: "Dresses", end_date: "2014-12-25", description: "Design the perfect little black dress for any party occassion. The approximate price point will be between $150 - $200.", admin_id: 3, background_img: "LBD.jpg"},
  {name: "Men's T-shirt", category: "T-shirts", end_date: "2014-12-25", description: "Braid chunky sole indigo oversized sweatshirt clutch leggings center part chignon crop. Sandal Saint Laurent plaited loafer tucked t-shirt street style dungaree. 90s skirt bomber gold collar knitwear rings white shirt white. Herms maxi dress Lanvin strong eyebrows grunge.", admin_id: 3, background_img: "tshirt.jpg"},
  {name: "Sweater", category: "Sweaters", end_date: "2014-12-15", description: "Braid chunky sole indigo oversized sweatshirt clutch leggings center part chignon crop. Sandal Saint Laurent plaited loafer tucked t-shirt street style dungaree. 90s skirt bomber gold collar knitwear rings white shirt white. Herms maxi dress Lanvin strong eyebrows grunge.", admin_id: 3, background_img: "sweater.jpg"},
  {name: "Trenchcoat", category: "Jackets", end_date: "2014-12-15", description: "Braid chunky sole indigo oversized sweatshirt clutch leggings center part chignon crop. Sandal Saint Laurent plaited loafer tucked t-shirt street style dungaree. 90s skirt bomber gold collar knitwear rings white shirt white. Herms maxi dress Lanvin strong eyebrows grunge.", admin_id: 3, background_img: "trenchcoat.jpg"},
  {name: "Sneakers", category: "Shoes", end_date: "2014-12-18", description: "Braid chunky sole indigo oversized sweatshirt clutch leggings center part chignon crop. Sandal Saint Laurent plaited loafer tucked t-shirt street style dungaree. 90s skirt bomber gold collar knitwear rings white shirt white. Herms maxi dress Lanvin strong eyebrows grunge.", admin_id: 3, background_img: "shoes.jpg"},
  {name: "High Heels", category: "Shoes", end_date: "2014-12-18", description: "Braid chunky sole indigo oversized sweatshirt clutch leggings center part chignon crop. Sandal Saint Laurent plaited loafer tucked t-shirt street style dungaree. 90s skirt bomber gold collar knitwear rings white shirt white. Herms maxi dress Lanvin strong eyebrows grunge.", admin_id: 3, background_img: "heels.jpg"},
  {name: "Long Occasion Dress", category: "Dresses", end_date: "2014-12-18", description: "Braid chunky sole indigo oversized sweatshirt clutch leggings center part chignon crop. Sandal Saint Laurent plaited loafer tucked t-shirt street style dungaree. 90s skirt bomber gold collar knitwear rings white shirt white. Herms maxi dress Lanvin strong eyebrows grunge.", admin_id: 3, background_img: "longdress.jpg"},
  {name: "Men's Winter Jacket", category: "Jackets", end_date: "2014-12-18", description: "Braid chunky sole indigo oversized sweatshirt clutch leggings center part chignon crop. Sandal Saint Laurent plaited loafer tucked t-shirt street style dungaree. 90s skirt bomber gold collar knitwear rings white shirt white. Herms maxi dress Lanvin strong eyebrows grunge.", admin_id: 3, background_img: "jacket.jpg"}
])
Comment.create!([
  {user_id: 3, design_id: 1, body: "This is a nice comment"},
  {user_id: 2, design_id: 1, body: "This is a nice comment"},
  {user_id: 1, design_id: 1, body: "This is a nice comment"},
])
Design.create!([
  {title: "Cats", designer_id: 3, challenge_id: 1, description: "catscatcats", challenge_rank: nil, filepicker_url: "https://www.filepicker.io/api/file/TrUyT3EIST2bsz3xnO3I"},
  {title: "Velvet", designer_id: 3, challenge_id: 1, description: "Stuff", challenge_rank: nil, filepicker_url: "https://www.filepicker.io/api/file/aZbyh2i4QFSG8edOUrFg"},
  {title: "Black", designer_id: 3, challenge_id: 1, description: "Cats", challenge_rank: nil, filepicker_url: "https://www.filepicker.io/api/file/a868uUTHQHLv0wA5E2So"},
  {title: "Test", designer_id: 3, challenge_id: 1, description: "Test", challenge_rank: nil, filepicker_url: "https://www.filepicker.io/api/file/9I49rnjXROW72K9Rd69J"},
  {title: "More ", designer_id: 3, challenge_id: 1, description: "kittens", challenge_rank: nil, filepicker_url: "https://www.filepicker.io/api/file/L3BIIuWQsGerLe7cS6ak"},
  {title: "Drawing", designer_id: 3, challenge_id: 1, description: "Yah!", challenge_rank: nil, filepicker_url: "https://www.filepicker.io/api/file/dv7doxISRPGlKAJBouMC"}
])
User.create!([
  {email: "eline@gmail.com", password_digest: "$2a$10$ZwKIXyDHwk9fc/wMgSB6S.Vwmw.MkhZtHU1kYCzdg8fUKZaTSlzzS", session_token: "uKvuGXMyFTU-p4JnmoK33g", name: "Eline"},
  {email: "hudson@gmail.com", password_digest: "$2a$10$Cmidb0/savQeS2zHno.XBO5AzXb2TuDbnzmsMM1VtqwRCOFU78Vzm", session_token: "L_jxz0dvpYo3Ga9y4LQ2Yg", name: "Hudson"},
  {email: "joep@gmail.com", password_digest: "$2a$10$wO47wDtfL7TDsXcTrB7XYOLUwyg3zaRgp120toxBvrzlK6H2oN0CK", session_token: "d1iEcED5DpXJe7kLZZQJww", name: "Joep"}
])
Vote.create!([
  {design_id: 1, challenge_id: 1, user_id: 3, message: nil},
  {design_id: 1, challenge_id: 1, user_id: 2, message: nil},
])
