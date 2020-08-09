import React from "react";

// interface Props {
//   id: string;
//   classNames: string;
// }

// interface Dragable {
//   dragStartHandler(event: DragEvent): void;
//   dragEndHandler(event: DragEvent): void;
// }

// interface DragTarget {
//   dragOverHandler(event: DragEvent): void;
//   dropHandler(event: DragEvent): void;
//   drageLeaveHandler(event: DragEvent): void;
// }

const Board = ({ children, id, classNames }) => {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={id} onDrop={drop} onDragOver={dragOver} className={classNames}>
      {children}
    </div>
  );
};

export default Board;
