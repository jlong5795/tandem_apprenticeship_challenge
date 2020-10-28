import React from 'react';
import { useSelector } from 'react-redux';
import QuestionComponent from './QuestionComponent';

import { useShuffleArray } from '../../hooks/useShuffleArray'
const QuestionContainer = () => {
    const questionPool = useSelector(state => state.activeQuestions)
    console.log("QuestionContainer -> questionPool", questionPool)
    const sessionQuestions = useShuffleArray(questionPool)
    console.log("QuestionContainer -> sessionQuestions", sessionQuestions)
    
    return (
        <QuestionComponent />
    );
};

export default QuestionContainer;