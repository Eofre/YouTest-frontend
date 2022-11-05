export interface Question {
  question: string;
  answers: string[];
  currectAnswer: number;
  explanation: string;
  img: string;
}

export interface Test {
  id: number;
  title: string;
  description: string;
  img: string;
  questions: Question[];
}
