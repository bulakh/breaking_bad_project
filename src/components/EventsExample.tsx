import React, {ChangeEvent, DragEvent, MouseEvent, FC, useState, useRef} from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  }

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('Drag');
  }

  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }

  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP')
  }

  


  return (
    <div>
      <input 
        value={value} 
        onChange={changeHandler}
        type="text"
        placeholder="Управляемый" 
      />
      <input 
        ref={inputRef}
        type="text"
        placeholder="НЕ Управляемый" 
      />
      <button onClick={clickHandler}>Click me!</button>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'plum'}}></div>
      <div 
        onDrop={dropHandler} 
        onDragLeave={leaveHandler} 
        onDragOver={dragWithPreventHandler}
        style={{width: 200, height: 200, background: isDrag ? 'orange': 'wheat', marginTop: 20}}></div>
    </div>
  );
}

export default EventsExample;