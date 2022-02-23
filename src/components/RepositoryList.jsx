import "../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Unforms",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
