import HeroImg from './assets/images/illustration-of-light-bulb-with-brain-in-it.jpg'
import AboutImage from './assets/images/electricTeam.jpg'
import FeatureImage from './assets/images/DrawKit Vector Illustration Project Manager (6).svg'
import AvatarMan from './assets/images/avatarOne.png'
import AvatarWoman from './assets/images/AvatarTwo.jpg'
export const navigationData = [
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Services',
        link: '#services'
    },
    {
        name: 'Recommendations',
        link: '#recommendations'
    },
    {
        name: 'Contact',
        link: '#contact'
    },
]



export const heroData = {
    title: `Lorem Ipsum is simply dummy text`,
    subtitle: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    `,
    image: HeroImg
};

export const aboutData = {
    title: 'Find Out A Little More About Us',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters`,
    image: AboutImage
}


export const featuresData = {
    title: 'Some Features we Provide',
    subtitle: 'It is a long established fact that a reader will be',
    list: [
        {
            image: FeatureImage,
            title: 'Aldus PageMake',
            desc: 'There are many variations of passages There are many variations of passages',
            delay: '400'
        },
        {
            image: FeatureImage,
            title: 'Find Malorum',
            desc: 'There are many variations of passages',
            delay: '1000'
        },
        {
            image: FeatureImage,
            title: 'Aldus PageMake',
            desc: 'There are many variations of passages',
            delay: '1100'
        },
        {
            image: FeatureImage,
            title: 'Aldus PageMake',
            desc: 'There are many variations of passages',
            delay: '1300'
        },
    ]
}

export const recommendationData = [
    {
        name: 'Or Sasson',
        recommendation: 'this is the best place in the world1',
        avatarImage: AvatarMan
    },
    {
        name: 'Amit Ashkenazi',
        recommendation: 'this is the best place in the world2',
        avatarImage: AvatarWoman
    },
    {
        name: 'Yossi Sasson',
        recommendation: 'this is the best place in the world3',
        avatarImage: AvatarMan
    },
    {
        name: 'Pnina Sasson',
        recommendation: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        avatarImage: AvatarWoman
    },
]


export const footerData = {
    title: 'Electricity',
    subtitle: 'we are fixing electricity things',
    copyRights: '2022 company Terms Privacy',
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
