const navigationMidWidth = 200
const topSiteContainerMargin = 50

const standardMargin = 30

const mainViewWidth = 1150
const navBarHeight = 90

//Ciutadella
const siteFontFamily = 'PT Sans'
const siteFontFamilySecond = 'Roboto Condensed'
const siteFontGrotesque = 'Grotesque'
const siteFontGrotesqueMono = 'GrotesqueMono'
const siteFontTiempo = 'Tiempo'
const siteGreen = '#5cdc88'
const siteBlue = '#009cde'

const evolvLogoLocal = '/assets/logoblack.svg'
const heartWhiteSvg = '/assets/whiteheart.svg'
const heartBlackSvg = '/assets/blackheart.svg'
const whiteStarSvg = '/assets/whitestar.svg'
const blackStarSvg = '/assets/blackstar.svg'
const blackTruckSvg = '/assets/blacktruck.svg'
const blackCheckSvg = '/assets/blackcheck.svg'
const rightArrow = '/assets/rightarrow.svg'
const leftArrow = '/assets/leftarrow.svg'

const localCartKey = 'evolv_clone_cart'
const genericProPic = 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/a1.png'

const pros = [
    {
        id: 1, 
        name: "ALEX JOHNSON",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5287c29de4b0fd595cc2aa5a/1586285619951-NTFBN58GDHF6UIX8C6DK/333069C8-D839-40E7-8A1B-04BC378FE7B0.JPG?format=1000w"
    },
    {
        id: 2, 
        name: "ASHIMA SHIRAISHI",
        imageUrl: "https://everywherebookfest.com/wp-content/uploads/2020/04/ashima-shiraishi.jpg"
    },
    {
        id: 3, 
        name: "STEPH DAVIS",
        imageUrl: "https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2018/07/24011808/33599234_1868673426505647_3520053740084133888_n.jpg"
    },
    {
        id: 4, 
        name: "CRAIG DEMARTINO",
        imageUrl: "https://arc-cms-prod.imgix.net/content/profile-page/CraigDeMartino.jpg"
    },
    {
        id: 5, 
        name: "DANIEL WOODS",
        imageUrl: "https://gripped.com/wp-content/uploads/2015/01/woods-768x675.jpg"
    },
    {
        id: 6, 
        name: "COLIN DUFFY",
        imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2021%252F04%252F08%252Fcolin-duffy-1-2000.jpg&q=85"
    },
    {
        id: 7, 
        name: "JUSTIN SALAS",
        imageUrl: "https://uploads-ssl.webflow.com/5732511283fb5b4c17492b27/5a1b0095962016000141acd8_Justin%20Salas%20-%20Worm%20Turns.jpg"
    },
    {
        id: 8, 
        name: "KAI LIGHTNER",
        imageUrl: "http://blog.momentumclimbing.com/wp-content/uploads/2014/08/4N5B5954-2.jpg"
    },
    {
        id: 9, 
        name: "GENEVIVE WALKER",
        imageUrl: "https://sterlingrope.com/media/widgetkit/Genevive-portrait-900x600-e1421fe3e81b561d7a6595dcd919e590.jpg"
    },
    {
        id: 10, 
        name: "EMMA HUNT",
        imageUrl: "https://bloximages.newyork1.vip.townnews.com/tribuneledgernews.com/content/tncms/assets/v3/editorial/f/39/f3960542-fcd2-11e9-b834-d7d33e717487/5dbc758eccabb.image.jpg"
    },
    {
        id: 11, 
        name: "PAUL ROBINSON",
        imageUrl: "https://cdn.shopify.com/s/files/1/0666/3291/files/image2.jpeg?11089448240577805381"
    },
    {
        id: 12, 
        name: "RONNIE DICKSON",
        imageUrl: "https://media.timesfreepress.com/img/photos/2019/04/14/ronniedickson92941907560_t1070_hd31c04a4ac66ea082f61d2b4451e459249e88fd8.jpg"
    },

]

const topCarouselOptions = [
    {
        imageUrl: "https://www.evolvsports.com/media/image/29/87/bf/RebelPride_webPrnFbRV1HCAe4.jpg",
        titleText: "Love Is Love",
        buttonText: "SHOP PRIDE REBEL",
        path: '/shop/product?productId=018d8434-58b5-4833-bc44-3161129b18e6'
    },
    {
        imageUrl: "https://www.evolvsports.com/media/image/ed/ae/9a/x1.jpg",
        titleText: "Closeout Deals Up To 50% Off",
        buttonText: "SHOP CLOSEOUTS",
        path: '/shop?closeout'
    },
    {
        imageUrl: "https://www.evolvsports.com/media/image/b7/87/ab/Geshido_M_Velcro_Web_1920x1920.jpg",
        titleText: "Draw Your Own Lines.",
        buttonText: "2021 GESHIDO VELCRO",
        path: '/shop?name=Velcro'
    },
    {
        imageUrl: "https://www.evolvsports.com/media/image/e5/1c/e3/Defy_Web_1920x1920.jpg",
        titleText: "Lace up. Hang out. Climb on.",
        buttonText: "2021 DEFY LACE",
        path: '/shop/product?productId=a5a9aac0-fca4-45bf-bfe9-a2665644b32e'
    }
]

export {
    rightArrow,
    leftArrow, 
    topCarouselOptions,
    localCartKey,
    navigationMidWidth,
    siteGreen,
    siteBlue,
    standardMargin,
    mainViewWidth,
    topSiteContainerMargin,
    siteFontFamily,
    siteFontFamilySecond,
    evolvLogoLocal, 
    heartWhiteSvg, 
    heartBlackSvg,
    whiteStarSvg,
    blackStarSvg,
    blackTruckSvg,
    blackCheckSvg,
    navBarHeight,
    siteFontGrotesque,
    siteFontGrotesqueMono,
    siteFontTiempo,
    pros,
    genericProPic
}
