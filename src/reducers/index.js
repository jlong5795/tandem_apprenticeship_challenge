const questionPool = require('../Apprentice_TandemFor400_Data.json')

const initialState = {
    user: {
        username: '',
        highscore: 0
    },
    activeQuestions: questionPool,
    currentQuestions: [],
    answeredQuestions: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}