const items = [
    {
    _id: 1,
    name: 'Promo Image Resizer',
    desc: 'Image Resizer',
    url: 'https://promo.com/tools/image-resizer/',
    date: {year: 2018, month: 'DEC'},
    tags: ['image', 'resize', 'edit']
    },
    {
    _id: 2,
    name: 'Froala Design Music',
    desc: 'Designs Block that look slick',
    url: 'https://froala.com/design-blocks',
    date: {year: 2018, month: 'DEC'},
    tags: ['design', 'component', 'ui']
    },
    {
    _id: 3,
    name: 'Ouch!',
    desc: 'Vector Illustrations',
    url: 'https://icons8.com/ouch',
    date: {year: 2018, month: 'DEC'},
    tags: ['free', 'pic', 'vector', '2d']
    },
    {
    _id: 4,
    name: 'Remove Image Background',
    desc: 'Remove Background from images',
    url: 'https://www.remove.bg/',
    date: {year: 2018, month: 'DEC'},
    tags: ['edit', 'image', 'background']
    },
    {
    _id: 5,
    name: 'Serfo Checker & Testing',
    desc: 'Check your website responsivness',
    url: 'https://serfo.com/p/responsive-design-checker/',
    date: {year: 2018, month: 'DEC'},
    tags: ['responsive', 'website']
    },
    {
    _id: 6,
    name: 'Inter',
    desc: 'Free Inter UI font that works great on smaller screens',
    url: 'https://rsms.me/inter/',
    date: {year: 2019, month: 'JAN'},
    tags: ['font', 'ui']
    },
    {
    _id: 7,
    name: 'Public API',
    desc: 'The best list of free Public APIs I have ever found',
    url: 'https://public-apis.xyz/',
    date: {year: 2019, month: 'JAN'},
    tags: ['api', 'free', 'list']
    },
    {
    _id: 8,
    name: 'Invision',
    desc: 'UI kit for sleek looking dashboards',
    url: 'https://www.invisionapp.com/inside-design/design-resources/design-system-dashboard-ui-kit/',
    date: {year: 2019, month: 'JAN'},
    tags: ['ui', 'design', 'dashboard']
    },
    {
    _id: 9,
    name: 'PandaDoc',
    desc: 'Profesional Freelance contract template',
    url: 'https://www.pandadoc.com/freelance-contract-template/',
    date: {year: 2019, month: 'JAN'},
    tags: ['nontec', 'contract']
    },
    {
    _id: 10,
    name: 'Programming Fonts',
    desc: 'Try out the best programming fonts',
    url: 'https://app.programmingfonts.org/#agave',
    date: {year: 2019, month: 'JAN'},
    tags: ['font']
    },
    {
    _id: 11,
    name: 'Palette',
    desc: 'Really cool palette picker',
    url: 'https://palettte.app/',
    date: {year: 2019, month: 'JAN'},
    tags: ['colors', 'rgb']
    },
    {
    _id: 12,
    name: 'Mixkit',
    desc: 'Free HD videos to use in your projects',
    url: 'https://mixkit.co/',
    date: {year: 2019, month: 'FEB'},
    tags: []
    },
    {
    _id: 13,
    name: 'Iconscout',
    desc: '1000+ Pixel perfect vector icons for your next project',
    url: 'https://iconscout.com/unicons',
    date: {year: 2019, month: 'JAN'},
    tags: ['icons', '2d', 'pixel']
    },
    {
    _id: 14,
    name: 'Charts Factory',
    desc: 'Charts, charts, everywhere',
    url: 'https://panel.chartsfactory.com/login',
    date: {year: 2019, month: 'FEB'},
    tags: ['charts']
    },
    {
    _id: 15,
    name: 'Sheety',
    desc: 'Turn any google spreadsheet into your own api',
    url: 'https://sheety.co/',
    date: {year: 2019, month: 'FEB'},
    tags: ['google', 'api']
    },
    {
    _id: 16,
    name: 'Absurd Design',
    desc: 'Free Surrealist Illustrator for your next project',
    url: 'ttps://absurd.design/',
    date: {year: 2019, month: 'MAR'},
    tags: ['free', 'pic', 'art']
    },
    {
    _id: 17,
    name: 'Avodocs',
    desc: 'Legal Document templates for your next project',
    url: 'https://www.avodocs.com/',
    date: {year: 2019, month: 'MAR'},
    tags: ['nontec', 'documents']
    },
    {
    _id: 18,
    name: 'Pexels',
    desc: 'Stock videos for all',
    url: 'https://www.pexels.com/videos',
    date: {year: 2019, month: 'MAR'},
    tags: ['videos', 'free', 'stock']
    },
    {
    _id: 19,
    name: 'Joe Schmoe',
    desc: 'Free avatar collection',
    url: 'https://joeschmoe.io/',
    date: {year: 2019, month: 'MAR'},
    tags: ['avatar', 'free', 'pics', '2d']
    },
    {
    _id: 20,
    name: 'Landing Stock',
    desc: 'Images for your landing page',
    url: 'https://landingstock.com/',
    date: {year: 2019, month: 'MAR'},
    tags: ['free', 'stock', 'pictures']
    },
    {
    _id: 21,
    name: 'ToDesktop',
    desc: 'Convert your web app to desktop app in a couple of minutes',
    url: 'https://www.todesktop.com/',
    date: {year: 2019, month: 'ABR'},
    tags: ['Desktop', 'Web']
    },
    {
    _id: 22,
    name: 'Neilpatel',
    desc: 'Find out who links your website',
    url: 'https://neilpatel.com/backlinks',
    date: {year: 2019, month: 'ABR'},
    tags: ['nontech', 'link']
    },
    {
    _id: 23,
    name: 'Ikonate',
    desc: 'Awesome, costumizable, icons',
    url: 'https://ikonate.com/',
    date: {year: 2019, month: 'ABR'},
    tags: ['icons', '2D', 'vector']
    },
    {
    _id: 24,
    name: 'SwiftCV',
    desc: 'Nice and clean resume template',
    url: 'https://app.swiftcv.com/@/batman',
    date: {year: 2019, month: 'ABR'},
    tags: ['nontech', 'resume']
    },
    {
    _id: 25,
    name: 'Public sans',
    desc: 'New free font from the US government (no, seriously)',
    url: 'https://public-sans.digital.gov/',
    date: {year: 2019, month: 'ABR'},
    tags: ['font', 'free']
    },
    {
    _id: 26,
    name: 'Lorem Picsum',
    desc: 'Lorem Picsum for photos. Placeholder photos for your MVP',
    url: 'https://picsum.photos/',
    date: {year: 2019, month: 'MAY'},
    tags: ['random', 'picture']
    },
    {
    _id: 27,
    name: 'Uppy',
    desc: 'Ever Wanted to code your own file uploder?',
    url: 'https://uppy.io/docs/',
    date: {year: 2019, month: 'MAY'},
    tags: ['file', 'library']
    },
    {
    _id: 28,
    name: '1MB',
    desc: 'A nice free way to host your website under 1MB',
    url: 'https://1mb.co/',
    date: {year: 2019, month: 'MAY'},
    tags: ['host']
    },
    {
    _id: 29,
    name: 'CC Search',
    desc: 'Creative Common Search: find images you can freely use',
    url: 'https://search.creativecommons.org/',
    date: {year: 2019, month: 'MAY'},
    tags: ['free', 'picture']
    },
    {
    _id: 30,
    name: 'Josh W Comeau',
    desc: 'Coolest CSS effect I have seen in a long time',
    url: 'https://joshwcomeau.com/react/folding-the-dom/',
    date: {year: 2019, month: 'MAY'},
    tags: ['css', 'cool']
    },
    {
    _id: 31,
    name: 'Tornis',
    desc: 'Tornis Library, which allows you to react to different viewport events',
    url: 'https://tornis.robbowen.digital/',
    date: {year: 2019, month: 'MAY'},
    tags: ['mouse', 'library']
    },
    {
    _id: 32,
    name: 'Hatchful',
    desc: 'Amazing generator that creates different logos for you in seconds',
    url: 'https://hatchful.shopify.com/',
    date: {year: 2019, month: 'JUN'},
    tags: ['logo', 'design']
    },
    {
    _id: 33,
    name: '404 Illustrations',
    desc: 'Free 404 page illustrations',
    url: 'https://www.kapwing.com/404-illustrations',
    date: {year: 2019, month: 'JUN'},
    tags: ['error', 'free', 'picture']
    },
    {
    _id: 34,
    name: 'CSSWand',
    desc: 'Copy and Paste CSS styles you can use ',
    url: 'https://www.csswand.dev/',
    date: {year: 2019, month: 'JUN'},
    tags: ['css', 'design', 'cool']
    },
    {
    _id: 35,
    name: 'Delesign',
    desc: 'Some free illustrations',
    url: 'https://delesign.com/free-designs/graphics',
    date: {year: 2019, month: 'JUL'},
    tags: ['free','pictures', '2d']
    },
    {
    _id: 36,
    name: 'Curlx',
    desc: 'A nice little tool for working with api request ',
    url: 'https://curlx.dev/',
    date: {year: 2019, month: 'JUL'},
    tags: ['api', 'library']
    },
    {
    _id: 37,
    name: 'Paaaterns',
    desc: 'Really pretty patterns for your web projects',
    url: 'https://products.ls.graphics/paaatterns/',
    date: {year: 2019, month: 'JUL'},
    tags: ['design', 'patterns']
    },
    {
    _id: 38,
    name: 'IMGBot',
    desc: 'Process your images with this tool',
    url: 'https://www.imgbot.ai/',
    date: {year: 2019, month: 'JUL'},
    tags: ['image', 'edit']
    },
    {
    _id: 39,
    name: 'GetWaves',
    desc: 'Generate pretty looking waves',
    url: 'https://getwaves.io/',
    date: {year: 2019, month: 'AUG'},
    tags: ['picture', 'design']
    },
    {
    _id: 40,
    name: 'Namecheap',
    desc: 'Another free Logo maker',
    url: 'https://www.namecheap.com/logo-maker/',
    date: {year: 2019, month: 'AUG'},
    tags: ['logo', 'design']
    },
    {
    _id: 41,
    name: 'Pagemap',
    desc: 'A nice little tool to make page maps',
    url: 'https://larsjung.de/pagemap/',
    date: {year: 2019, month: 'AUG'},
    tags: ['library']
    },
    {
    _id: 42,
    name: 'Mixkit',
    desc: 'Free Art and illustrations for you to use ',
    url: 'https://mixkit.co/free-stock-art/',
    date: {year: 2019, month: 'AUG'},
    tags: ['free', 'picture', 'stock', '2d']
    },
    {
    _id: 43,
    name: 'Dashblock',
    desc: 'Turn any website into an api ',
    url: 'https://www.dashblock.com/',
    date: {year: 2019, month: 'AUG'},
    tags: ['api', 'web']
    },
    {
    _id: 44,
    name: 'Shade',
    desc: 'Free startup templates',
    url: 'https://grayic.com/shade/',
    date: {year: 2019, month: 'AUG'},
    tags: ['template', 'free']
    },
    {
    _id: 45,
    name: 'Freebies by People',
    desc: 'All the freebies in one location ',
    url: 'https://freebies.bypeople.com/',
    date: {year: 2019, month: 'SEP'},
    tags: ['free', 'font']
    },
    {
    _id: 46,
    name: 'Humans',
    desc: 'Inspiration for your portfolio website',
    url: 'https://humans.fyi/',
    date: {year: 2019, month: 'SEP'},
    tags: ['template']
    },
    {
    _id: 47,
    name: 'Superhero API',
    desc: 'Superhero API',
    url: 'https://superheroapi.com/',
    date: {year: 2019, month: 'SEP'},
    tags: ['api', 'library']
    },
    {
    _id: 48,
    name: 'Reakti',
    desc: 'A new React component library with accessibility in mind',
    url: 'https://reakit.io/',
    date: {year: 2019, month: 'MAY'},
    tags: ['library', 'react']
    },
    {
    _id: 49,
    name: 'UI Kitten 5.0',
    desc: 'A new React Native framework that looks really sleek',
    url: 'https://akveo.github.io/react-native-ui-kitten/',
    date: {year: 2019, month: 'JUNE'},
    tags: ['library', 'react', 'UI']
    },
    {
    _id: 50,
    name: 'Framer Motion',
    desc: 'A cool new animation library to use for your React projects',
    url: 'https://www.framer.com/motion/',
    date: {year: 2019, month: 'JULY'},
    tags: ['libary', 'react', 'UI']
    },
    {
    _id: 51,
    name: 'React Layouts',
    desc: 'Grab and go Solution for layouts',
    url: 'https://react-layouts.com/',
    date: {year: 2019, month: 'AUG'},
    tags: ['react', 'UI']
    },
    {
    _id: 52,
    name: 'Flawwwless UI',
    desc: 'A nice react Component library, so you don’t build your own',
    url: 'https://ui.flawwwless.com/documentation/intro',
    date: {year: 2019, month: 'SEP'},
    tags: ['react', 'library', 'ui']
    },
    {
    _id: 53,
    name: 'React Rainbow Components',
    desc: 'Annnnd another react library',
    url: 'https://react-rainbow.web.app/#/Components',
    date: {year: 2019, month: 'SEP'},
    tags: ['react', 'library', 'ui', 'components']
    },
    {
    _id: 54,
    name: 'free illustrations',
    desc: 'My favorite illustration library in a long time',
    url: 'https://freellustrations.com/',
    date: {year: 2019, month: 'OCT'},
    tags: ['background', 'free', 'image']
    },
    {
    _id: 55,
    name: 'Glaze',
    desc: 'Free illustrations for everything',
    url: 'https://www.glazestock.com/',
    date: {year: 2019, month: 'OCT'},
    tags: ['free', 'picture', '2d']
    },
    {
    _id: 56,
    name: 'FreshFolk',
    desc: 'Another free illustrations for projects',
    url: 'https://fresh-folk.com/',
    date: {year: 2019, month: 'OCT'},
    tags: ['free', 'pictrue', '2d']
    },
    {
    _id: 57,
    name: 'OpenDoodles',
    desc: 'The last of free illustration',
    url: 'https://www.opendoodles.com/',
    date: {year: 2019, month: 'OCT'},
    tags: ['free', 'picture', '2d']
    },
    {
    _id: 58,
    name: 'Icons8',
    desc: '200 free icons for you!',
    url: 'https://icons8.com/animated-icons',
    date: {year: 2019, month: 'OCT'},
    tags: ['free', '2d', 'stock', 'vector']
    },
    {
    _id: 59,
    name: 'Divjoy',
    desc: 'Paid react components',
    url: 'https://divjoy.com/',
    date: {year: 2019, month: 'OCT'},
    tags: ['components', 'react', 'ui']
    },
    {
    _id: 60,
    name: 'Happy Hues',
    desc: 'Really pretty collection of color combinations',
    url: 'https://www.happyhues.co/palettes/15',
    date: {year: 2019, month: 'NOV'},
    tags: ['color', 'desgin']
    },
    {
    _id: 61,
    name: 'Font Pairings',
    desc: 'Find the best font pairing for your next project',
    url: 'https://fontpairings.bypeople.com/',
    date: {year: 2019, month: 'NOV'},
    tags: ['font', 'design']
    },
    {
    _id: 62,
    name: 'Use FYI',
    desc: 'Find a ton of free resources and templates for freelancers',
    url: 'https://usefyi.com/templates/freelancer-templates/',
    date: {year: 2019, month: 'NOV'},
    tags: ['templates']
    },
    {
    _id: 63,
    name: 'Illustrations ',
    desc: 'Really really pretty free illustrations for your next project',
    url: 'https://illlustrations.co/',
    date: {year: 2019, month: 'NOV'},
    tags: ['picturs', 'free', 'stock', '2d']
    },
    {
    _id: 64,
    name: 'EasyDB',
    desc: 'One click database and no server required',
    url: 'https://easydb.io/',
    date: {year: 2019, month: 'NOV'},
    tags: ['database', 'free']
    },
    {
    _id: 65,
    name: 'Wireframer',
    desc: 'Wirefram SVGs to download for your next project',
    url: 'https://www.wireframer.art/',
    date: {year: 2019, month: 'DEC'},
    tags: ['design', 'wireframe']
    },
    {
    _id: 66,
    name: 'Apply Ya',
    desc: 'Another Resume template that you can use so you stop wasting time and get hired quickly',
    url: 'https://applyya.com/editor',
    date: {year: 2019, month: 'DEC'},
    tags: ['nontech', 'resume']
    },
    {
    _id: 67,
    name: 'Gradienta',
    desc: 'Really nice done color gradient to make you look artsy',
    url: 'https://gradienta.io/',
    date: {year: 2019, month: 'DEC'},
    tags: ['color', 'design']
    },
    {
    _id: 68,
    name: 'Invoicy',
    desc: 'Generate invoice and receipts for your clients',
    url: 'https://invoicy.io/',
    date: {year: 2019, month: 'DEC'},
    tags: ['nontech', 'money']
    },
    {
    _id: 69,
    name: 'unDraw',
    desc: 'A constantly updated collection of beautiful SVG images that you can use completely free and without attribution ',
    url: 'https://undraw.co/',
    date: {year: 2019, month: 'DEC'},
    tags: ['stock', 'free', 'pictures']
    },
    {
    _id: 70,
    name: 'Generative Placeholder',
    desc: 'Generative art as your image placeholder (this is really cool)',
    url: 'https://generative-placeholders.glitch.me/',
    date: {year: 2020, month: 'JAN'},
    tags: ['picture', 'test']
    },
    {
    _id: 71,
    name: 'Colorsinspo',
    desc: 'The world doesn’t have enough color pallets so here is one',
    url: 'https://colorsinspo.com/',
    date: {year: 2020, month: 'JAN'},
    tags: ['color', 'palets']
    },
    {
    _id: 72,
    name: 'React Nice Date',
    desc: 'React nice date',
    url: 'https://reactnicedates.hernansartorio.com/',
    date: {year: 2020, month: 'JAN'},
    tags: ['react', 'dates']
    },
    {
    _id: 73,
    name: 'Fiverr',
    desc: 'Another free logo maker',
    url: 'https://www.fiverr.com/logo-maker',
    date: {year: 2020, month: 'FEB'},
    tags: ['logo']
    },
    {
    _id: 74,
    name: 'Colors and fonts',
    desc: 'Everything you ever wanted ',
    url: 'https://www.colorsandfonts.com/css-reference',
    date: {year: 2020, month: 'FEB'},
    tags: ['colors', 'fonts']
    },
    {
    _id: 75,
    name: 'DesignValley',
    desc: 'Everything you might need for your design needs',
    url: 'https://www.designvalley.club/',
    date: {year: 2020, month: 'FEB'},
    tags: ['design', 'ui', 'templates']
    },
    {
    _id: 76,
    name: 'AI Image Enlarger',
    desc: 'Enlarge movies with out losing quality',
    url: 'https://imglarger.com/',
    date: {year: 2020, month: 'MAR'},
    tags: ['edit', 'image']
    },
    {
    _id: 77,
    name: 'Shotzr',
    desc: 'More free stock photos because I like you',
    url: 'https://www.shotzr.com/',
    date: {year: 2020, month: 'MAR'},
    tags: ['free', 'picture', 'stock']
    },
    {
    _id: 78,
    name: 'OpenChakra',
    desc: 'Visually build components and export them directly into React component files',
    url: 'https://openchakra.app/',
    date: {year: 2020, month: 'MAR'},
    tags: ['free', 'component']
    },
]

const solution = array => {
    const arr = new Array();
    array.forEach(e => {
        e.tags.forEach(el => {
            if (!(arr.includes(el))) {
                arr.push(el)
            } else {
                console.log('not working')
            }
        })

    })
    console.log(arr)
    return arr;
}

export function getTags() {
    return solution(items);
}

export function getData() {
    return items;
}