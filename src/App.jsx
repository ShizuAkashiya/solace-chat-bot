import './App.css';
import { fetchGroqResponse } from './utils/groq';
import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Logo from './assets/logo.png';

const App = () => {
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    const query = document.getElementById('queryInput').value.trim();
    if (query) {
      const result = await fetchGroqResponse(query);
      setResponse(result);
    }
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center">
      <img src={Logo} className="w-12 h-12 object-cover rounded-full" alt="Logo"/>
      <h1>Solace</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 py-4"
      >
        <input
          id="queryInput"
          className="py-2 px-4 text-md rounded-md"
          type="text"
          placeholder="Ask a question..."
        />
        <button
          onClick={handleQuery}
          className="bg-black py-2 px-4 font-bold text-white rounded-md"
          type="button"
        >
          Submit
        </button>
      </form>
      <div className="max-w-xl w-full mx-auto">
        {response && (
          <SyntaxHighlighter language="swift" style={darcula} wrapLongLines>
            {response}
          </SyntaxHighlighter>
        )}
      </div>
    </main>
  );
};

export default App;
