import { post } from "superagent";

const UPDATE_DESCRIPTION_QUERY = `
mutation updateDescription($repositoryId: ID!, $description: String!) {
    updateRepository(input: {repositoryId: $repositoryId, description: $description}) {
        repository {
            id
            description
        }
    }
}
`;

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const updateRepoDescription = (variables) => {
    return post("https://api.github.com/graphql")
            .set({
                Authorization: `Bearer ${TOKEN}`,
            })
            .send({
                query: UPDATE_DESCRIPTION_QUERY,
                variables
            });
}
