import {
    Inventory2Outlined,
    FavoriteBorderOutlined,
    RemoveRedEyeOutlined,
    ReceiptOutlined,
} from '@mui/icons-material';
import Home from '../../assets/Home.svg'
import Catalog from '../../assets/Catalog ico.svg'
import Top from '../../assets/Top users.svg'
import Comment from '../../assets/Comments ico.svg'
import Secure from '../../assets/Secure ico.svg'
import Change from '../../assets/Change.svg'
import Forum from '../../assets/Forum ico.svg'
import Basket from '../../assets/Basket.svg'
import Heart from '../../assets/Heart.svg'
import Eye from '../../assets/Eye.svg'
import Note from '../../assets/Note.svg'
import Vk from '../../assets/VK.svg'
import Fb from '../../assets/FB.svg'
import Tw from '../../assets/TW.svg'
import Ok from '../../assets/OK.svg'
import Yt from '../../assets/YT.svg'
import Ig from '../../assets/IG.svg'

export const navMenu = [
    {
        name: 'Главная',
        icon: <img src={Home} alt='home' style={{fontStyle:'#000'}}/>,
        path: '/',
        id: 1
    },
    {
        name: 'Каталог',
        icon: <img src={Catalog} alt='home'/>,
        path: '/catalog',
        id: 2
    },
    {
        name: 'Топ юзеров',
        icon: <img src={Top} alt='home'/>,
        path: '/topusers',
        id: 3
    },
    {
        name: 'Отзывы',
        icon: <img src={Comment} alt='home'/>,
        path: '/reviews',
        id: 4
    },
    {
        name: 'Гарантия',
        icon: <img src={Secure} alt='home'/>,
        path: '/warranty',
        id: 5
    },
    {
        name: 'Случайный предмет',
        icon: <img src={Change} alt='home'/>,
        path: '/random',
        id: 6
    },
    {
        name: 'Форум',
        icon: <img src={Forum} alt='home'/>,
        path: '/forum',
        id: 7
    }
]
export const navMenuColor = [
    {
        name: 'Продать товар',
        icon: <img src={Basket} alt='home'/>,
        path: '/product',
        id: 1
    },
    {
        name: 'Закладки',
        icon: <img src={Heart} alt='home'/>,
        count: 16,
        path: '/likes',
        id: 2
    },
    {
        name: 'История просмотра',
        icon: <img src={Eye} alt='home'/>,
        path: '/view',
        id: 3
    },
    {
        name: 'Покупки и продажи',
        icon: <img src={Note} alt='home'/>,
        path: '/sale',
        id: 4
    },
]
export const navMenuInfo = [
    {
        name: 'Пользовательское соглашение',
        path: '/info',
        id: 1
    },
    {
        name: 'Контакты',
        count: 16,
        path: '/contact',
        id: 2
    },
    {
        name: 'Частые вопросы',
        path: '/question',
        id: 3
    }
]
export const navMenuMessage = [
    {
        icon: <img src={Vk} alt='home'/>,
        path: '/',
        id: 1
    },
    {
        icon: <img src={Fb} alt='home'/>,
        count: 16,
        path: '/',
        id: 2
    },
    {
        icon: <img src={Tw} alt='home'/>,
        path: '/',
        id: 3
    },
    {
        icon: <img src={Ok} alt='home'/>,
        path: '/',
        id: 4
    },
    {
        icon: <img src={Yt} alt='home'/>,
        path: '/',
        id: 5
    },
    {
        icon: <img src={Ig} alt='home'/>,
        path: '/',
        id: 6
    },
]