import React from "react";

interface Props {
  id: string;
  className: string;
  draggable: "true" | "false";
}

const Card: React.FC<Props> = ({ children, id, className, draggable }) => {
  const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    event.dataTransfer!.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      id={id}
      className={className}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {children}
    </div>
  );
};

export default Card;
