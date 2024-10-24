
import { TreeNodeType } from './types'

export const treeData: TreeNodeType = {
  id: 1,
  name: '/app',
  children: [
    { 
      id: 2,
      name: '/components',
      children: [
        {
          id: 3,
          name: 'Files.tsx'
        },
        {
          id: 4,
          name: 'Navbar.tsx'
        }
      ]
    },
    {
      id: 5,
      name: '/tests',
      children: [
        { id: 6, name: 'e2e.test.ts' },
        { id: 7, name: 'ui.test.ts' },
      ],
    },
  ],
};
