import React, { useState, useEffect } from "react";
import { fetchRepositories } from './queries/fetch-repositories';

export default function App() {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    // send off query as soon as component is rendered
    useEffect(() => {
        fetchRepositories()
            .then((x) => setRepos(x.data.viewer.repositories.nodes))
            .catch((error) => setError(error))
    }, []);

    const repoList = repos.map((repo) => (
        <div key={repo.id}>
            <a href={repo.url}>{repo.nameWithOwner}</a>
            <span>{repo.description}</span>
        </div>
    ));

    return (
        <div>
            <h1>Your Repositories</h1>
            {error ? <p>{error.toString()}</p> : repoList}
        </div>
    );
}