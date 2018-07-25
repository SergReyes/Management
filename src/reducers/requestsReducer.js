import { 
    CHANGE_SELECTED_REQUEST_TYPE
} from '../actions/types';

const INITIAL_STATE = {
    requests: [],
    selectedRequestType: 'pending'
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SELECTED_REQUEST_TYPE:
            const boxTypes = action.payload
            return{
                ...state,
                selectedRequestType: boxType
        }
        default: return state;
    }
}