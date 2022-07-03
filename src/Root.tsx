import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import MainView from './views/MainView';
import Pokedex from './providers/pokedex';
import { usePokedex } from './modules/pokedex/actions';

const Root: FunctionComponent = () => {
  const [store, dispatch] = usePokedex();

  return (
    <Pokedex.Provider value={{store, dispatch}}>
      <ThemeProvider theme={{}}>
        <MainView />
      </ThemeProvider>
    </Pokedex.Provider>
  );
}

export default Root;
