import React, { useEffect, useState } from 'react';
import { IQuestion } from 'components/types';
import * as styles from './Question.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { setStep, setSelectedAnswers } from '../../store/reducers/quiz';

interface Question {
  data: IQuestion;
}

const QUESTION_TYPE = {
  multiple: 'Боллее одного ответа',
  single: 'Один ответ',
};

export const Question = ({ data }: Question) => {
  const dispatch = useAppDispatch();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (optionId: string, isChecked: boolean) => {
    if (data.type === 'multiple') {
      setSelectedOptions((prevSelected) =>
        isChecked
          ? [...prevSelected, optionId]
          : prevSelected.filter((id) => id !== optionId)
      );
    } else {
      setSelectedOptions([optionId]);
    }
  };

  const handleSubmit = (skip?: boolean) => {
    if (!skip && !selectedOptions.length) return;
    dispatch(setStep());
    dispatch(setSelectedAnswers({ [data.id]: skip ? [] : selectedOptions }));
    setSelectedOptions([]);
  };

  return (
    <div className={styles.container}>
      <p className={styles.questionTitle}>{data.text}</p>
      <span className={styles.questionSubtitle}>
        {QUESTION_TYPE[data.type]}
      </span>
      <ul className={styles.options}>
        {data.options.map((option) => (
          <li
            key={option.id}
            className={styles.option}
            onClick={() => {
              if (data.type === 'multiple') {
                const isChecked = !selectedOptions.includes(option.id);
                handleOptionChange(option.id, isChecked);
              } else {
                handleOptionChange(option.id, true);
              }
            }}
          >
            <span className={styles.optionText}>{option.text}</span>
            {data.type === 'multiple' ? (
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={(e) =>
                  handleOptionChange(option.id, e.target.checked)
                }
              />
            ) : (
              <input
                type="radio"
                checked={selectedOptions[0] === option.id}
                onChange={() => handleOptionChange(option.id, true)}
              />
            )}
          </li>
        ))}
      </ul>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleSubmit(true)}>
          Затрудняюсь ответить
        </button>
        <button className={styles.button} onClick={() => handleSubmit()}>
          Далее
        </button>
      </div>
    </div>
  );
};
