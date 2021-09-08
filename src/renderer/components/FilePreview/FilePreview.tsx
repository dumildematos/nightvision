import React, { useState } from 'react';

import AceEditor from 'react-ace';

// import mode-<language> , this imports the style and colors for the selected language.
import 'ace-builds/src-noconflict/mode-javascript';
// there are many themes to import, I liked monokai.
import 'ace-builds/src-noconflict/theme-ambiance';
// this is an optional import just improved the interaction.
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
import styled from 'styled-components';

const Editor = styled(AceEditor)`
  width: 100% !important;
  height: 100% !important;
`;

export default function FilePreview() {
  const [code, setCode] = useState(`function hello() {
  console.log("Hello World!");
}`);
  return (
    <Editor
      placeholder="Start Coding"
      mode="javascript"
      theme="ambiance"
      name="ace-editor"
      onChange={(currentCode) => setCode(currentCode)}
      fontSize={14}
      showPrintMargin
      showGutter
      highlightActiveLine
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
      }}
    />
  );
}
