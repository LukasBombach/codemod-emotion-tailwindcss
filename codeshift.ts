import type { API, FileInfo } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const cssImport = j(file.source).find(j.ImportDeclaration, node => node.source.value === "@emotion/react");

  return root.toSource();
}
