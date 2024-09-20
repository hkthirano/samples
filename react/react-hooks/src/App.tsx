import './App.css';
import useCounter from './hooks/useCounter';
import useFetch from './hooks/useFetch';

// カスタムフック
function App() {
  const { count, increment } = useCounter();
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // }

  const { data, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <button onClick={increment}>+</button> {count}

      <br />

      <button onClick={() => refetch()}>fetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
