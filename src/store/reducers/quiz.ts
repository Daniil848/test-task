import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QUESTIONS } from './constants';
import { IQuestion } from 'components/types';

interface QuizState {
  questions: IQuestion[];
  currentStep: number;
  selectedAnswers: { [key: string]: string[] }[];
}

const initialState: QuizState = {
  questions: QUESTIONS,
  currentStep: 1,
  selectedAnswers: [],
};

const quizSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setStep: (state) => {
      if (state.currentStep <= state.questions.length) {
        state.currentStep += 1;
      }
    },
    setSelectedAnswers: (
      state,
      action: PayloadAction<{ [key: string]: string[] }>
    ) => {
      state.selectedAnswers.push(action.payload);
    },
  },
});

export const { setStep, setSelectedAnswers } = quizSlice.actions;
export default quizSlice.reducer;
