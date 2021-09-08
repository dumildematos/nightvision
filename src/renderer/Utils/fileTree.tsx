// eslint-disable-next-line max-classes-per-file
import fs from 'fs';

class TreeNode {
  public key: string;
  public title: string;
  public children: Array<TreeNode>;

  constructor(key: string) {
    this.key = key;
    const keyArray = this.key.split('/');
    this.title = String(key.split('/')[keyArray.length - 1]);
    this.children = [];
  }
}

export default class FileTree {
  name: null;

  items: never[];

  key: string;

  constructor(key: string, name = null) {
    this.key = key;
    this.name = name;
    this.items = [];
  }

  build = () => {
    this.items = FileTree.readDir(this.key);
  };

  buildTree = (rootkey: string) => {
    const root = new TreeNode(rootkey);

    const stack = [root];

    while (stack.length) {
      const currentNode = stack.pop();

      if (currentNode) {
        const children = fs.readdirSync(currentNode.key);

        // eslint-disable-next-line no-restricted-syntax
        for (const child of children) {
          const childkey = `${currentNode.key}/${child}`;
          const keyArray = currentNode.key.split('/');
          const childTitle = String(
            currentNode.key.split('/')[keyArray.length - 1]
          );
          const childNode = new TreeNode(childkey);
          currentNode.title = childTitle;
          currentNode.children.push(childNode);

          if (fs.statSync(childNode.key).isDirectory()) {
            stack.push(childNode);
          }
        }
      }
    }

    return root;
  };

  renderUnorderedList = () => {
    return FileTree.renderUnorderedListHtml(this.items);
  };

  static renderUnorderedListHtml(_files: unknown[]) {
    return '';
  }

  static readDir(key: string) {
    const fileArray: FileTree[] = [];

    fs.readdirSync(key).filter((file) => {
      const fileInfo = new FileTree(`${key}\\${file}`, file);

      const stat = fs.statSync(fileInfo.key);

      if (stat.isDirectory()) {
        fileInfo.items = FileTree.readDir(fileInfo.key);
      }

      fileArray.push(fileInfo);
    });

    return fileArray;
  }
}
