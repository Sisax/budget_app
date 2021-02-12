import React from 'react';
import './App.css';
import Items from './pages/Items';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Items />
      </div>
    </QueryClientProvider>
  );
}

export default App;
