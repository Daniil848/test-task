export interface IQuestion {
  id: string;
  order: number;
  type: 'multiple' | 'single';
  text: string;
  options: { id: string; text: string }[];
  correctAnswer: string[];
}
