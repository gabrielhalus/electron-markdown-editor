import React, { useEffect, useState, KeyboardEvent } from 'react';
import Input from './Input';

interface Line {
  id: number;
  content: string;
}

const TextEditor: React.FC = () => {
  const [lines, setLines] = useState<Line[]>([{ id: 0, content: '' }]);

  const keymapHandler = (event: KeyboardEvent<HTMLDivElement>, lineId: number) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        const lineIndex = lines.findIndex(line => line.id === lineId);
        if (lineIndex >= 0) {
          const newLine: Line = { id: Date.now(), content: '' };
          const newLines = [...lines];
          newLines.splice(lineIndex + 1, 0, newLine);
          setLines(newLines);
          setTimeout(() => {
            const line = document.getElementById(`line-${newLine.id}`);
            line?.focus();
          }, 0);
        }
        break;
      case 'Backspace':
        if (event.metaKey) {
          event.preventDefault();
          const lineIndex = lines.findIndex(line => line.id === lineId);
          if (lineIndex > 0 || (lineIndex === 0 && lines.length > 1)) {
            const newLines = [...lines];
            newLines.splice(lineIndex, lineIndex + 1);
            setLines(newLines);
          }
        }
        break;
    }
  };

  const handleLineChanges = (line: { id: number; content: string }) => {
    const lineIndex = lines.findIndex(currentLine => currentLine.id === line.id);
    if (lineIndex >= 0) {
      const newLines = [...lines];
      newLines[lineIndex] = { ...lines[lineIndex], content: line.content };
      setLines(newLines);
    }
  };

  useEffect(() => {
    // window.localStorage.setItem('file', JSON.stringify(lines));
  }, [lines]);

  return (
    <div>
      {lines.map(line => (
        <Input key={line.id} lineId={line.id} keymapHandler={keymapHandler} handleLineChange={handleLineChanges} />
      ))}
    </div>
  );
};

export default TextEditor;
