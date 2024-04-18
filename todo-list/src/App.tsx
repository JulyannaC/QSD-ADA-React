import { Header } from './components/Header/Header';
import "./styles/global.css";
import { Tasks } from './components/Tasks/Tasks';
import { useState } from 'react';
import { TasksProvider } from './context/TasksContext';


function App() {
  // useEffect(() => {
  //   console.log('Executando a função do useEffect..')

  //   //componentWillUnmount => cleanup function
  //   return() => {
  //     console.log('Será executado quando o componente App for desmontado da tela')
  //   }
  // }, [toogle]);

  //O useEffect será disparado sempre que alguma variável do array de 
  //dependências for alterada;

  //Por padrão, sempre o useEffect será disparado após a montagem
  //do componente(componentDidMount);

  return (
    <TasksProvider>
      <Header/>
      <Tasks />

      {/* <Refs/> */}

      {/* <Memoization financialData={{incomes: [50, 30,20], outcomes: [5, 8, 4]}}/> */}
    </TasksProvider>
  );
}

export default App;
