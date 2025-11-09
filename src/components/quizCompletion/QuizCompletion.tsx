import React from 'react';
import { useAppSelector } from '../../store/hooks';
import * as styles from './QuizCompletion.module.scss';

export const QuizCompletion = () => {
  const questions = useAppSelector((state) => state.quiz.questions);
  const selectedAnswers = useAppSelector((state) => state.quiz.selectedAnswers);

  const calculateResults = () => {
    let correctCount = 0;

    questions.forEach((question) => {
      const userAnswer = selectedAnswers.find(
        (answer) => answer[question.id]
      )?.[question.id];

      if (
        userAnswer &&
        JSON.stringify([...userAnswer].sort()) ===
          JSON.stringify(question.correctAnswer.slice().sort())
      ) {
        correctCount += 1;
      }
    });

    return correctCount;
  };

  return (
    <div className={styles.completionContainer}>
      <h3>Тест завершен!</h3>
      <p>
        Вы правильно ответили на {calculateResults()} из {questions.length}{' '}
        вопросов.
      </p>
      <button
        className={styles.restartButton}
        onClick={() => window.location.reload()}
      >
        Начать заново
      </button>
    </div>
  );
};
