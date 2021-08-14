
const NAMESPACE = 'COUNTER'

export const ADD_REQUEST = `${NAMESPACE}/ADD_REQUEST`;
export const ADD_SUCCESS_REQUEST = `${NAMESPACE}/ADD_SUCCESS_REQUEST`;
export const MINUS_REQUEST = `${NAMESPACE}/MINUS_REQUEST`;
export const CANCEL_REQUEST = `${NAMESPACE}/CANCEL_REQUEST`;


export const ADD_REQUEST_DELAY = `${NAMESPACE}/ADD_REQUEST_DELAY`;
export const ADD_SUCCESS_DELAY = `${NAMESPACE}/ADD_SUCCESS_DELAY`;

export function addRequestAction() {
    return { type: ADD_REQUEST };
}

export function addSuccessAction(payload) {
    return { type: ADD_SUCCESS_REQUEST, payload };
}

export function addRequestDelayction() {
    return { type: ADD_REQUEST_DELAY };
}

export function addSuccessDelayAction(payload) {
    return { type: ADD_SUCCESS_DELAY, payload };
}

export function addMinusAction(payload) {
    return { type: ADD_REQUEST, payload };
}

export function cancelAction() {
    return { type: CANCEL_REQUEST };
}


const initialState = {
    counter: 0
}


export default counterReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_REQUEST:

        //     return {
        //         ...state,
        //     };

        case ADD_SUCCESS_REQUEST:

            return {
                ...state,
                counter: state.counter + action.payload
            };

        case ADD_SUCCESS_DELAY:

            return {
                ...state,
                counter: state.counter + action.payload
            };

        case MINUS_REQUEST:

            return {
                ...state,
                counter: counter - action.payload
            };

        default:
            return state;
    }
}