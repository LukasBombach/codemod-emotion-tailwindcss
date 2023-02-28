import { Project } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "./tsconfig.json",
});
const file = project.getSourceFileOrThrow("fixtures/ArticleBody.style.tsx");

debugger;

console.log(file);
