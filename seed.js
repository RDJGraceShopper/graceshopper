const db = require('./server/db')
const {green, red} = require('chalk')

const {
  Order,
  Product,
  Shipping,
  Tag,
  User,
  PaymentMethod,
  OrderProduct,
  TagProduct
} = require('./server/db/models')

const seed = async () => {
  await db.sync({force: true}).then(() => {
    User.create({
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'peter@mcu.org',
      address: '4 Hanover Square',
      zip: '11221'
    })
    User.create({
      firstName: 'Steven',
      lastName: 'Strange',
      email: 'docunfamiliar@astralrealm.gov',
      address: '666 Park ave',
      zip: '11221'
    })

    // Product.create({
    //   name: "Thor's Hammer",
    //   quantity: 1,
    //   description: "Thor's Hammer",
    //   imageURL: 'https://toppng.com/uploads/preview/thor-hammer-png-avengers-thor-mjolner-limited-edition-full-size-hammer-11562918441y7burz4hlv.png',
    //   price: 5000
    // })
    // Product.create({
    //   name: "Captain America's Shield",
    //   quantity: 1,
    //   description: "Blocks out the haters...a true classic",
    //   price: 500,
    //   imageURL: 'https://img.favpng.com/5/23/10/captain-america-s-shield-marvel-cinematic-universe-film-superhero-movie-png-favpng-YgVsa6B5GYqDw6Cr5kFmrnrLs.jpg'
    // })
    // Product.create({
    //   name: "Professor X's Wheelchair",
    //   quantity: 2,
    //   imageURL: 'https://i7.pngguru.com/preview/427/694/340/professor-x-cyclops-magneto-jean-grey-x-men-wheelchair.jpg',
    //   description: 'They see me rollin',
    //   price: 500000
    // })
    // Product.create({
    //   name: "Wolverine's Claws",
    //   quantity: 2,
    //   description: 'Indestructible!',
    //   price: 1283,
    //   imageURL: 'https://i.dlpng.com/static/png/6309674-wolverine-claw-png-wolverine-claws-png-transparent-png-claws-png-840_555_preview.png'
    // })
    // Product.create({
    //   name: "Hulk's Britches",
    //   quantity: 2,
    //   description: 'Wash em first!',
    //   price: 200,
    //   imageURL: 'https://p7.hiclipart.com/preview/969/378/440/5bbf90348bfba.jpg'
    // })
    // Product.create({
    //   name: "Hawkeye's Arrow",
    //   quantity: 2,
    //   description: 'They never miss except sometimes!',
    //   price: 5,
    //   imageURL: 'https://p1.hiclipart.com/preview/285/791/717/hawkeye-to-left-png-clipart.jpg'
    // })
    // Product.create({
    //   name: "The Rock In Vision's Forehead",
    //   quantity: 2,
    //   description: 'Acts a nightlight!',
    //   price: 150,
    //   imageURL: 'https://toppng.com/uploads/preview/mind-stone-by-saiol-power-stone-png-saiol1000-11562853764idqeirx7xm.png'
    // })
    // Product.create({
    //   name: "Nick Fury's Eyepatch",
    //   quantity: 2,
    //   description: 'Snakes on this motherf***ing plane',
    //   price: 10000,
    //   imageURL: 'https://i.dlpng.com/static/png/4461924-eyepatch-cliparts-eye-patch-nick-fury-png-download-474577-eye-patch-png-black-and-white-320_242_preview.webp'
    // })
    Product.create({
      name: 'Iron Man Suit Mk1',
      quantity: 2,
      description:
        'Tony Stark was able to build this in a cave! With a box of scraps!',
      price: 20000000,
      imageURL:
        'https://vignette.wikia.nocookie.net/ironman/images/b/bf/Ch-200003885000.png/revision/latest/top-crop/width/360/height/450?cb=20190727114446'
    })
    Product.create({
      name: 'Arc Reactor v1',
      quantity: 2,
      description: 'Proof that Tony Stark has a heart',
      price: 25000000,
      imageURL:
        'https://img.pngio.com/hd-reactor-arc-iron-man-png-download-541424-png-images-pngio-arc-reactor-png-hd-635_634.png'
    })
    // Product.create({
    //   name: "The Winter Soldier's Arm",
    //   quantity: 2,
    //   description: "Almost as big as Adel's",
    //   price: 2000,
    //   imageURL: 'https://p1.hiclipart.com/preview/197/931/588/bucky-s-arm-png-clipart.jpg'
    // })
    Product.create({
      name: "Coulson's Gun",
      quantity: 2,
      description: 'Generic gun, but Coulson was cool',
      price: 35000,
      imageURL:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/davd5xm-58c626fd-279f-4c8e-9db9-34ecaa13b505.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGF2ZDV4bS01OGM2MjZmZC0yNzlmLTRjOGUtOWRiOS0zNGVjYWExM2I1MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bJ6Y9xNSPgS9KpT4xMayGlZkEdD0SVuu-9r0shWtjCk'
    })
    // Product.create({
    //   name: "Falcon's Wings",
    //   quantity: 2,
    //   description: "",
    //   price: 2000,
    //   imageURL: 'https://i1.pngguru.com/preview/255/398/368/infinity-war-falcon-man-with-wing-costume-png-clipart.jpg'
    // })
    // Product.create({
    //   name: "Dr. Strange's Cape",
    //   quantity: 2,
    //   description: "Plush...and loyal",
    //   price: 750,
    //   imageURL: 'https://img.favpng.com/3/9/17/doctor-strange-action-toy-figures-marvel-cinematic-universe-marvel-select-png-favpng-Zs0uTsLyAR5xYQqTkyuQ6HmG0.jpg'
    // })
    Product.create({
      name: "Whiplash's Damaged Ego",
      quantity: 2,
      description: 'Never forgive, never forget',
      price: 2000,
      imageURL:
        'https://vignette.wikia.nocookie.net/vsbattles/images/5/5e/Iron_man_2_whiplash_png_by_davidbksandrade-dbl4hoc.png/revision/latest/scale-to-width-down/340?cb=20180614061819'
    })
    // Product.create({
    //   name: "Baron Zimo's Powers",
    //   quantity: 2,
    //   description: "Average speed, average strength, good at talking",
    //   price: 99,
    //   imageURL: 'https://p1.hiclipart.com/preview/838/544/28/captain-america-civil-war-baron-helmut-zemo-png-clipart.jpg'
    // })
    // Product.create({
    //   name: "Black Panther's Suit",
    //   quantity: 2,
    //   description: "Strong and light",
    //   price: 45000,
    //   imageURL: 'https://p7.hiclipart.com/preview/429/965/315/black-panther-erik-killmonger-shuri-standee-poster-black-panther-thumbnail.jpg'
    // })
    Product.create({
      name: "Thor's Potbelly",
      quantity: 2,
      description: 'Pleasantly plump.',
      price: 10000,
      imageURL:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddejo9j-8f16982e-ca74-43ad-a387-9bc6a52c2ac3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhMTk2MTE3LTBiNjQtNDliNy1iMTNmLTc5ZjQzY2Y3N2U1M1wvZGRlam85ai04ZjE2OTgyZS1jYTc0LTQzYWQtYTM4Ny05YmM2YTUyYzJhYzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bPoIwCZD4tYd-cYYemzPriec6FXHJpSSmyjY5-Y6s4U'
    })
    Product.create({
      name: 'Extremis Virus',
      quantity: 2,
      description: 'Become shirtless!',
      price: 1500000,
      imageURL:
        'https://vignette.wikia.nocookie.net/marveldatabase/images/0/00/Eric_Savin_%28Earth-12131%29_from_Marvel_Avengers_Alliance_001.png/revision/latest?cb=20130530215122'
    })
    // Product.create({
    //   name: "Black Widow's Pistol",
    //   quantity: 2,
    //   description: "Is it special?",
    //   price: 1200,
    //   imageURL: 'https://www.pinclipart.com/picdir/middle/93-931295_black-widow-png-transparent-images-avengers-black-widow.png'
    // })
    // Product.create({
    //   name: "The Tesseract",
    //   quantity: 2,
    //   description: "Always rolls a 6!",
    //   price: 75000,
    //   imageURL: 'https://img.favpng.com/8/15/21/loki-captain-america-odin-cosmic-cube-tesseract-png-favpng-b7tETNp6QYvdg1BvjQnrFwRjs.jpg'
    // })
    Product.create({
      name: 'The Infinity Gauntlet',
      quantity: 2,
      description: 'Stones sold separately.',
      price: 800000,
      imageURL:
        'https://img.pngio.com/infinity-gauntlet-png-photo-png-arts-infinity-gauntlet-png-666_1199.png'
    })

    Order.create({
      price: 3000,
      shippingCost: 500,
      total: 3500,
      userId: 1
    })
    Order.create({
      price: 3500,
      shippingCost: 1500,
      total: 5000,
      userId: 2
    })
    PaymentMethod.create({
      name: 'Visa',
      orderId: 2
    })
    Tag.create({
      name: 'Thor',
      productId: 1
    })
    Shipping.create({
      trackingNumber: '1',
      orderId: 1
    })
    OrderProduct.create({
      quantity: 3,
      price: 3000,
      orderId: 1,
      productId: 1
    })
    TagProduct.create({
      productId: 1,
      tagId: 1
    })
  })
  // seed your database here!

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
