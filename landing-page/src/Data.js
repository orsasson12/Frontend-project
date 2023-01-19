import AboutImg from './assets/imgs/DrawKit Vector Illustration Project Manager (5).svg'
import HeroImg from './assets/imgs/DrawKit Vector Illustration Project Manager (6).svg'
import Avatar1 from './assets/imgs/DrawKit Vector Illustration Project Manager (4).svg'
import Avatar2 from './assets/imgs/DrawKit Vector Illustration Project Manager (6).svg'
import Feature1Img from './assets/fetures/DrawKit Vector Illustration Project Manager (13).svg'
import Feature2Img from './assets/fetures/DrawKit Vector Illustration Project Manager (14).svg'
import Feature3Img from './assets/fetures/DrawKit Vector Illustration Project Manager (15).svg'
import Feature4Img from './assets/fetures/DrawKit Vector Illustration Project Manager (16).svg'
import LogoV2 from './assets/fetures/DrawKit Vector Illustration Project Manager (17).svg'


export const navigationData = [
    {
        name: 'Gallery',
        href: '#gallery'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Features',
        href: '#features'
    },
    {
        name: 'Contact',
        href: '#contact'
    },
]

export const heroData = {
    title: `Lorem Ipsum is simply dummy text`,
    subtitle: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    `,
    btnText: `Get Started`,
    image: Avatar1
};

export const aboutData = {
    image: AboutImg,
    title: `Find out A Little More About Us`,
    subtitle: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    `
}



export const featruesData = {
    title: 'Some Services We Offer',
    subtitle: 'It is a long established fact that a reader will be',
    list: [
        {
            image: Feature1Img,
            title: 'Aldus PageMake',
            description: 'There are many variations of passages',
            linkText: 'Learn more',
            delay: '400'
        },
        {
            image: Feature2Img,
            title: 'Find Malorum',
            description: 'There are many variations of passages',
            linkText: 'Learn more',
            delay: '1000'
        },
        {
            image: Feature3Img,
            title: 'Aldus PageMake',
            description: 'There are many variations of passages',
            linkText: 'Learn more',
            delay: '1000'
        },
        {
            image: Feature4Img,
            title: 'Aldus PageMake',
            description: 'There are many variations of passages',
            linkText: 'Learn more',
            delay: '1300'
        },

    ]
}


export const galleryData = [
    {
        title: ' first work',
        message: 'the best work in the world1',
        image: HeroImg,
        delay: '300'
    },
    {
        title: ' second work',
        image: AboutImg,
        message: 'the best work in the world2',
        delay: '400'
    },
    {
        title: ' third work',
        image: Feature1Img,
        message: 'the best work in the world3',
        delay: '500'
    },
    {
        title: ' fourth work',
        image: Feature3Img,
        message: 'the best work in the world4',
        delay: '600'
    },
]



export const footerData = {
    title: 'Contact Us',
    subtitle: 'Lorem Ipsum',
    btn1: 'learn more',
}


export const footerItems = {
    productds: [
        {
            name: 'Lorem ipsum.', link: '#',
        },
        {
            name: ' dolor sit amet,', link: '#',
        },
        {
            name: ' dolor sit amet,', link: '#',
        },
    ],
    company: [
        {
            name: 'dolor sit amet,', link: '#'
        },
        {
            name: 'About us', link: '#'
        },
        {
            name: 'Press', link: '#'
        },
        {
            name: 'Services', link: '#'
        },
    ]
}


export const footerIcons = [
    { name: "logo-facebook", link: "#" },
    { name: "logo-twitter", link: "#" },
    { name: "logo-github", link: "#" },
    { name: "logo-linkedin", link: "#" },
    { name: "logo-instagram", link: "#" },
];