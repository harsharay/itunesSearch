import { takeLatest,call,select,put,fork,all } from "redux-saga/effects"

let query = state => state.query
let entity = state => state.entity
let id = state => state.id

//WORKER SAGAs
function* callingApi() {
    const input = yield select(query)
    const response = yield call(fetch,`https://itunes.apple.com/search?term=${input}`)
    const data = yield response.json()
    yield put({ type: 'SEARCH_API_CALL',payload: data.results })
}

function* changingEntity() {
    let entityVal = yield select(entity)
    if(entityVal!==all){
        const input = yield select(query)
        const response = yield call(fetch,`https://itunes.apple.com/search?term=${input}&entity=${entityVal}`)
        const data = yield response.json()
        yield put({ type: "ASYNC_CHANGE_ENTITY",payload: data.results })
    } else {
        const input = yield select(query)
        const response = yield call(fetch,`https://itunes.apple.com/search?term=${input}`)
        const data = yield response.json()
        yield put({ type: "ASYNC_CHANGE_ENTITY",payload: data.results })
    }
    
}


function* singleApiCall() {
    let indi_id = yield select(id)
    const response = yield call(fetch,`https://itunes.apple.com/search?term=${indi_id}`)
    const data = yield response.json()
    yield put({ type:"INDI_ASYNC_CALL",payload: data.results })
}


//WATCHER SAGAs
export function* ApiCall() {
    yield takeLatest("SEARCH", callingApi)
}

export function* changeEntity() {
    yield takeLatest("CHANGE_ENTITY", changingEntity)
}

export function* individualCall() {
    yield takeLatest("INDIVIDUAL_SELECT", singleApiCall)
}

export function* rootSaga() {
   yield all([
    takeLatest("SEARCH", callingApi),
    takeLatest("CHANGE_ENTITY", changingEntity),
    takeLatest("INDIVIDUAL_SELECT", singleApiCall)
   ])    
}