import React from 'react';
import { Provider } from 'react-redux';
import { Quiz } from './components/quiz/Quiz';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
};

export default App;
