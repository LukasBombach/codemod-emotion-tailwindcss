import { Project, ts } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "./tsconfig.json",
});
const sourceFile = project.getSourceFileOrThrow("fixtures/ArticleBody.style.tsx");

const emotionReact = sourceFile.getImportDeclaration("@emotion/react");
const namedImports = emotionReact.getNamedImports();
const [probablyCss] = namedImports;

const usages = probablyCss.getNameNode().findReferencesAsNodes();
console.log(usages);

debugger;
