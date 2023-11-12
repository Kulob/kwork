import {
    HomeOutlined,
    AutoGraphOutlined,
    StarBorderOutlined,
    TextsmsOutlined,
    GppGoodOutlined,
    AccountTreeOutlined,
    Inventory2Outlined,
    FavoriteBorderOutlined,
    RemoveRedEyeOutlined,
    ReceiptOutlined,
    ForumOutlined
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
    },
    {
        name: 'Форум',
        icon: <ForumOutlined />,
        path: '/forum',
        id: 7
    }
]
export const navMenuColor = [
    {
        name: 'Продать товар',
        icon: <Inventory2Outlined />,
        path: '/product',
        id: 1
    },
    {
        name: 'Закладки',
        icon: <FavoriteBorderOutlined />,
        count: 16,
        path: '/likes',
        id: 2
    },
    {
        name: 'История просмотра',
        icon: <RemoveRedEyeOutlined />,
        path: '/view',
        id: 3
    },
    {
        name: 'Покупки и продажи',
        icon: <ReceiptOutlined />,
        path: '/sale',
        id: 4
    },
]