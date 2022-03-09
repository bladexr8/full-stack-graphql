import logo from './logo.svg';
import './App.css';
import { useRepoQuery } from './queries/fetch-repositories';
import { Repo } from './Repo';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

export default function App() {
  const { loading, error, data } = useRepoQuery();

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>  
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <p>{error.toString()}</p>  
      </div>
    )
  }

  const repos = data.viewer.repositories.nodes;
  const repoList = repos.map((repo) => <Repo repo={repo} key={repo.id} />);

  //console.log(repos);

  return (
    <div className="App">
      <h1>Your Repositories</h1>
      <div className="Content">
        { error ? <p>error.toString()</p> : repoList}  
      </div>
    </div>
  )

}
