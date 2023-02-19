import React, { KeyboardEvent, SyntheticEvent, useRef } from 'react';

interface IInputProps {
  lineId: number;
  handleLineChange: (line: { id: number; content: string }) => void;
  keymapHandler: (event: KeyboardEvent<HTMLDivElement>, lineId: number) => void;
}

const Input: React.FC<IInputProps> = ({ lineId, handleLineChange, keymapHandler }) => {
  const lineRef = useRef<HTMLDivElement>(null);

  /**
   * Handler during key press / input
   * @param event
   */
  const onChangeHandler = (event: SyntheticEvent<HTMLDivElement>) => {};

  /**
   * Handler when user opens input form
   * @param event
   */
  const onBlurHandler = (event: SyntheticEvent<HTMLDivElement>) => {
    // Some code that send the value to be saved
    const newValue = lineRef.current?.innerText || '';
    handleLineChange({ id: lineId, content: newValue });
  };

  return (
    <div
      ref={lineRef}
      id={`line-${lineId}`}
      className='line'
      contentEditable
      suppressContentEditableWarning
      onInput={e => onChangeHandler(e)}
      onBlur={e => onBlurHandler(e)}
      onKeyDown={e => keymapHandler(e, lineId)}
      // dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};

export default Input;
