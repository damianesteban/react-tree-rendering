import { flattenedPathData } from "../data";
import { TreeNodeType } from "../types"

// Counter for node id
let idCounter = 1;


// Create a new node
const createNode = (name: string, children: TreeNodeType[] | undefined): TreeNodeType => ({
  id: idCounter++,
  name,
  children
});

/**
 * Inserts a node recursively into the tree. 
 * @param path 
 * @param node 
 * @returns 
 */
const insertNode = (path: string[], node: TreeNodeType): TreeNodeType => {
  if (path.length === 0) return node;

  const [current, ...rest] = path;
  const isFile = rest.length === 0 && current.includes('.');

  // Find or create the child node
  let updatedChildren: TreeNodeType[];
  const existingChild = node.children?.find((child) => child.name === current);

  if (existingChild) {
    // If the child exists, continue recursively
    const updatedChild = insertNode(rest, existingChild);
    updatedChildren = node.children!.map((child) =>
      child.name === current ? updatedChild : child
    );
  } else {
    // Create a new child and recurse if path is not yet complete
    const newChild = createNode(current, isFile ? undefined : []);
    const fullyUpdatedChild = rest.length > 0 ? insertNode(rest, newChild) : newChild;
    updatedChildren = [...(node.children || []), fullyUpdatedChild];
  }

  // Return a new node with updated children
  return { ...node, children: updatedChildren };
};

/**
 * Creates a Tree structure to render in the component.
 * @param data 
 * @returns 
 */
const createTreeData = (data: typeof flattenedPathData): TreeNodeType => {
  return data.reduce((tree, { path }) => {
    const splitPath = path.replace(/^app\//, '').split('/');
    return insertNode(splitPath, tree);
  }, createNode('app/', []));
};

// Build the tree immutably
const treeData = createTreeData(flattenedPathData);

export default treeData;
