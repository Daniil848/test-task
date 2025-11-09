import React from 'react';
import { ProgressBar } from '../progressBar/ProgressBar';
import { Question } from '../question/Question';
import { QuizCompletion } from '../quizCompletion/QuizCompletion';
import { useAppSelector } from '../../store/hooks';
import * as styles from './Quiz.module.scss';

export const Quiz = () => {
  const questions = useAppSelector((state) => state.quiz.questions);
  const step = useAppSelector((state) => state.quiz.currentStep);

  const currentQuestion =
    questions && questions.find((question) => question.order === step);

  const total = questions.length;

  const renderContent = () => {
    if (step > total) {
      return <QuizCompletion />;
    }

    if (!currentQuestion) {
      return <p>Ошибка: Вопрос не найден</p>;
    }

    return (
      <>
        <Question data={currentQuestion} />
        <ProgressBar step={step} total={total} />
      </>
    );
  };

  return <div className={styles.container}>{renderContent()}</div>;
};
