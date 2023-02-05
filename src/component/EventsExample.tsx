import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(value);
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>)=>{
        console.log("ADASD");
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault();
        setIsDrag(false);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault();
        setIsDrag(true);
    }

    return(
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <input ref={inputRef} type="text" />
            <button onClick={clickHandler}>123</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: "lightgray"}}></div>
            <div onDrop={dropHandler} 
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? "green" : "lightgray", marginTop: 30}}></div>
        </div>
    );
};

export default EventsExample;