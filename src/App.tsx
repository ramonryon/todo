import { useState } from 'react';
import * as C from './App.Styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão', done: false },
    { id: 2, name: 'Comprar o bolo na padaria', done: true },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.header>Lista de Tarefas</C.header>
        {/* [Área de adicionar novas tarefas] */}

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;