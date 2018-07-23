import {
    SET_NEWSLETTERS
} from './types';

export function fetchNewsletters() {

    const response = {
        data:[
            {
            _id: '794',
            title: 'Happy Holidays',
            body: 'words words and lots of words',
            date: new Date(),
            imageUrl: 'https://via.placeholder.com/960x258'
            },
            {
            _id: '793',
            title: 'Second Newsletter',
            body: 'words words and lots of words',
            date: new Date(),
            imageUrl: 'https://via.placeholder.com/960x258'
            }
        ]
    }

    return{
        type: SET_NEWSLETTERS,
        payload: Response.data
    }
}