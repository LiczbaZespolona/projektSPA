import {home, rooms, treatments, booking} from '../views';

export const routes = [
    {name:'Home', path: '/', data: {}, component: home },
    {name:'Rooms', path: '/rooms', data: {}, component: rooms },
    {name:'Treatment', path: '/treatments', data: {}, component: treatments },
    {name:'Booking', path: '/booking', data: {}, component: booking }
];
