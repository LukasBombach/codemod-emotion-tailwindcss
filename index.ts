import { Project, ts } from "ts-morph";

import type { Node } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "./tsconfig.json",
});
const sourceFile = project.getSourceFileOrThrow("fixtures/ArticleBody.style.tsx");

const emotionReact = sourceFile.getImportDeclaration("@emotion/react");

assertNonNullable(emotionReact);

const namedImports = emotionReact.getNamedImports();
const [probablyCss] = namedImports;

const usages = probablyCss
  .getNameNode()
  .findReferencesAsNodes()
  .map(n => n.getParent())
  .filter(isNonNullable)
  .filter(isTaggedTemplateExpression);

console.log(usages.map(p => p?.getText()));

function isTaggedTemplateExpression(node: Node<ts.Node>): node is Node<ts.TaggedTemplateExpression> {
  return ts.isTaggedTemplateExpression(node.compilerNode);
}

function isNonNullable<T>(value: T | undefined | null): value is T {
  return typeof value !== "undefined" && value !== null;
}

function assertNonNullable<T>(value: T | undefined | null): asserts value is T {
  if (!isNonNullable(value)) throw new Error(`Value must not be ${value}`);
}
