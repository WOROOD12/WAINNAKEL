import { OPEN_MODAL, CLOSE_MODAL } from '../actions';
export default (state = {}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return false;
    }
};

