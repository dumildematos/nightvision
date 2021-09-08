import React, { createContext, ReactNode, useEffect, useState } from 'react';

type DirectoryList = {
  folder: any;
};

type Directory = {
  title: string;
  path: string;
  children: Directory[];
};

// type fileTree = {
//   path: string;
//   name: string;
//   items: fileTree[];
// };

type DirectoryProv = {
  children: ReactNode;
};

export const DirContext = createContext({} as DirectoryList);

export function DirProvider({ children }: DirectoryProv) {
  const [files, setFiles] = useState({});
  const [folder, setFolders] = useState({});
  const [directoryList, setDirectoryList] = useState({});

  function setDirList(data: Directory) {
    // console.log(data);
    setFolders(data);
  }



  // window.electron.ipcRenderer.on('read-directory', (data: any) => {
  //   // console.log(dados);
  //   setDirList(data);
  // });

  // window.electron.ipcRenderer.sendSync('list-dir', '');

  console.log(directoryList);
  return (
    <DirContext.Provider value={{ folder }}>{children}</DirContext.Provider>
  );
}
