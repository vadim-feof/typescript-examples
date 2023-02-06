import React, {FC, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    // OR
    //
    // const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //     console.log(e.target.value)
    // }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    // перетаскиваем первый квадрат
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('dragged')
    }

    // вышли из второго квадрата
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        //e.preventDefault()
        setIsDrag(false)
    }

    // когда держим первый квадрат над вторым
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    // отпустили первый квадрат над вторым
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            <input style={{height: 32, fontSize: 24}} value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler} style={{height: 24, marginLeft: 16}}>{value}</button>

            <div style={{padding: 16, margin: '16px auto 0', backgroundColor: 'burlywood', borderRadius: 4}}>

                <div
                    style={{margin: '0 auto 16px', backgroundColor: 'indianred', height: 150, aspectRatio: 1}}
                    onDrag={dragHandler}
                    draggable>
                </div>

                <div
                    onDrop={dropHandler}
                    onDragLeave={leaveHandler}
                    onDragOver={dragWithPreventHandler}
                    style={{margin: '0 auto 16px', backgroundColor: isDrag ? 'blueviolet' : 'greenyellow', height: 150, aspectRatio: 1}}>
                </div>
            </div>
        </div>
    );
};

export default EventsExample;
