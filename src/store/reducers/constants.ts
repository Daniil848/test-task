import { IQuestion } from '../../components/types';

export const QUESTIONS: IQuestion[] = [
  {
    id: 'q1',
    order: 1,
    type: 'single',
    text: 'Что такое Virtual DOM в React?',
    options: [
      { id: 'o1a', text: 'Это реальное представление DOM в браузере' },
      {
        id: 'o1b',
        text: 'Это легковесная копия реального DOM для оптимизации обновлений',
      },
      { id: 'o1c', text: 'Это инструмент для написания CSS-стилей' },
      { id: 'o1d', text: 'Это плагин для работы с графикой' },
    ],
    correctAnswer: ['o1b'],
  },
  {
    id: 'q2',
    order: 2,
    type: 'multiple',
    text: 'Какие хуки React предназначены для управления состоянием компонента?',
    options: [
      { id: 'o2a', text: 'useState' },
      { id: 'o2b', text: 'useEffect' },
      { id: 'o2c', text: 'useReducer' },
      { id: 'o2d', text: 'useCallback' },
    ],
    correctAnswer: ['o2a', 'o2c'],
  },
  {
    id: 'q3',
    order: 3,
    type: 'single',
    text: 'Что означает принцип DRY в программировании?',
    options: [
      { id: 'o3a', text: 'Do Repeat Yourself (Повторяй себя)' },
      { id: 'o3b', text: "Don't Repeat Yourself (Не повторяйся)" },
      { id: 'o4c', text: 'Dynamic Rendering Yield (Динамическая отрисовка)' },
      {
        id: 'o3d',
        text: 'Data Recovery Yearly (Ежегодное восстановление данных)',
      },
    ],
    correctAnswer: ['o3b'],
  },
  {
    id: 'q4',
    order: 4,
    type: 'multiple',
    text: 'Какие из перечисленных инструментов могут быть использованы для управления состоянием в приложении React?',
    options: [
      { id: 'o4a', text: 'Redux' },
      { id: 'o4b', text: 'MobX' },
      { id: 'o4c', text: 'React Context API' },
      { id: 'o4d', text: 'Axios' },
    ],
    correctAnswer: ['o4a', 'o4b', 'o4c'],
  },
];
