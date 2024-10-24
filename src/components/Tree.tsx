import { TreeNodeType } from '../types';
import React from 'react';

interface TreeNodeProps {
  node: TreeNodeType
}

// If the node has children, renders recursively
const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  if (!node.children || node.children.length === 0) {
    return <li className="tree-node">{node.name}</li>
  }

  return (
    <li className="tree-node">
      {node.name}
      <ul className="tree-children">
        {node.children.map((child) => (
          <TreeNode key={child.id} node={child} />
        ))}
      </ul>
    </li>
  )
}

interface TreeProps {
  data: TreeNodeType
}

// Renders the tree node - container
const Tree: React.FC<TreeProps> = ({ data }) => (
  <ul className="tree">
    <TreeNode node={data} />
  </ul>
)

export default Tree