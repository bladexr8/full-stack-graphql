import React, { useRef, useState } from "react";
import { updateRepoDescription } from "./queries/update-repo-description";

export const Repo = ({ repo }) => {
    const inputRef = useRef(null);
    const [isUpdating, setIsUpdating] = useState(false);

    const submit = () => {
        const repositoryId = repo.id;
        const description = inputRef.current.value;
        updateRepoDescription({ repositoryId, description })
            .then(() => {
                setIsUpdating(false);
            })
            .catch(() => {
                setIsUpdating(false);
                inputRef.current.value = repo.description
            });
    };

    return (
        <div key={repo.id}>
            <a href={repo.url}>{repo.nameWithOwner}</a>
            <input ref={inputRef} defaultValue={repo.description} />
            <button disabled={isUpdating} onClick={submit}>
                {" "}
                Submit{" "}    
            </button>    
        </div>
    )
}