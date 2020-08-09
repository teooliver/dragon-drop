import React, { useRef } from "react";

interface Props {
  id: string;
  className: string;
}

// interface Dragable {
//   dragStartHandler(event: DragEvent): void;
//   dragEndHandler(event: DragEvent): void;
// }

// interface DragTarget {
//   dragOverHandler(event: DragEvent): void;
//   dropHandler(event: DragEvent): void;
//   dragLeaveHandler(event: DragEvent): void;
// }

const Board: React.FC<Props> = ({ children, id, className }) => {
  const boardRef = useRef(null);

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const card_id = event.dataTransfer!.getData("card_id");
    const card = document.getElementById(card_id);
    card!.style.display = "block";

    // use ref?
    const target = event.target as HTMLElement;
    target.appendChild(card!);
  };

  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      ref={boardRef}
      id={id}
      onDrop={dropHandler}
      onDragOver={dragOver}
      className={className}
    >
      {children}
    </div>
  );
};

export default Board;
