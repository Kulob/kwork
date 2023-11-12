import {
    HomeOutlined,
    AutoGraphOutlined,
    StarBorderOutlined,
    TextsmsOutlined,
    GppGoodOutlined,
    AccountTreeOutlined
} from '@mui/icons-material';

export const navMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined />,
        path: '/',
        id: 1
    },
    {
        name: 'Каталог',
        icon: <AutoGraphOutlined />,
        path: '/catalog',
        id: 2
    },
    {
        name: 'Топ юзеров',
        icon: <StarBorderOutlined />,
        path: '/topusers',
        id: 3
    },
    {
        name: 'Отзывы',
        icon: <TextsmsOutlined />,
        path: '/reviews',
        id: 4
    },
    {
        name: 'Гарантия',
        icon: <GppGoodOutlined />,
        path: '/warranty',
        id: 5
    },
    {
        name: 'Случайный предмет',
        icon: <AccountTreeOutlined />,
        path: '/random',
        id: 6
    }
]