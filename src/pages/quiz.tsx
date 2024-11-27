import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import CardBox from '../components/CardBox';
import SectionFullScreen from '../components/Section/FullScreen';
import Timer from './timer';
import { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated'

type Question = {
  id: number;
  question: string;
  answer: string;
};

const mockQuestions: Question[] = [
  { id: 1, question: 'What is 5 + 3?', answer: '' },
  { id: 2, question: 'Solve 12 / 4:', answer: '' },
  { id: 3, question: 'What is 7 * 2?', answer: '' },
];

const QuizPage = () => {
  const [questions] = useState(mockQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [input, setInput] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeUp, setTimeUp] = useState(false);

  const handleTimeUp = () => {
    setTimeUp(true);
    alert("Time's up! You can't submit anymore answers.");
  };

  const handleButtonClick = (value: string) => {
    if (!timeUp) {
      setInput((prev) => prev + value);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (timeUp) return;

    if (event.key >= '0' && event.key <= '9') {
      setInput((prev) => prev + event.key);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      submitAnswer();
    } else if (event.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const submitAnswer = () => {
    if (timeUp) return;

    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, input];
      setInput('');
      setCurrentQuestionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < questions.length) {
          return nextIndex;
        } else {
          alert('Quiz Completed! Check the console for answers.');
          console.log('Submitted Answers:', updatedAnswers);
          return prevIndex;
        }
      });
      return updatedAnswers;
    });
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>

      <SectionFullScreen bg="purplePink" >
        <div className="relative w-full h-full flex flex-col items-center justify-start sm:justify-center  p-4 sm:pt-12 gap-6">
          {/* Timer */}
          <div className="sm:absolute sm:top-6 sm:right-5 flex justify-center items-center">
            <div className="text-3xl font-semibold">
              <Timer
                onTimeUp={handleTimeUp}
                
              />
            </div>
          </div>

          {/* Quiz Card */}
          <CardBox
           
           className="relative w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 
             shadow-2xl mx-auto p-6 text-center bg-white rounded-lg
             mt-4 sm:mt-6 mb-8 sm:mb-12" // Reduced top margin
         >
            <h2 className="text-center text-2xl font-bold mb-6  dark:text-white">Solve the Quiz</h2>

            <div className="mb-6">
              <p className="text-lg font-semibold mb-4 dark:text-white">{currentQuestion.question}</p>
              <div className="border p-4 text-2xl text-center dark:text-white">{input || '0'}</div>
            </div>

            {/* Number Keypad */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((button) => (
                <button
                  key={button}
                  className="p-4 bg-gray-300 hover:bg-gray-400 text-xl font-bold rounded"
                  onClick={() => handleButtonClick(button)}
                  disabled={timeUp}
                >
                  {button}
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={submitAnswer}
                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md"
                disabled={timeUp}
              >
                Submit Answer
              </button>
            </div>

            {timeUp && (
              <p className="text-center text-red-500 mt-4">
                Time's up! You cannot submit answers anymore.
              </p>
            )}
          </CardBox>
        </div>
      </SectionFullScreen>
    </>
  );
};
// QuizPage.getLayout = function getLayout(page: ReactElement) {
//   return <LayoutAuthenticated>{page}</LayoutAuthenticated>
// }

export default QuizPage;
