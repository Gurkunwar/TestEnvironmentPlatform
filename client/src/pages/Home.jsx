import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    const token = Cookies.get('access-token');
    console.log("Token:", token)

    if (token) {
      navigate('/quiz');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Quiz!</h1>
      <p className="text-lg text-center mb-8 max-w-md">
        Test your knowledge with our fun and engaging quiz. Answer a series of questions on various topics and see how well you score.
        Are you ready to challenge yourself?
      </p>
      <button
        onClick={handleStartQuiz}
        className="bg-blue-900 text-white p-3 pr-6 pl-6 rounded-md"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
