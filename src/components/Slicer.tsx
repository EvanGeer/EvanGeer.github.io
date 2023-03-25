import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Slicer.css";

export default function Slicer({
  slicerItems,
  onSelectionChanged,
}: {
  slicerItems: Map<string, string>;
  onSelectionChanged: (selectedKeys: Map<string, boolean>) => void;
}) {
  const startingValues = Array.from(slicerItems?.keys())
    .sort()
    .map((x) => {
      return {
        key: x,
        selected: false,
        imgSrc: slicerItems.get(x),
      };
    });

  const [items, setItems] = useState(startingValues);
  const [nonSelected, setNoneSelected] = useState(true);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string,
    index: number
  ) => {
    const newItems = [...items];

    // handle multi-select via key-down state
    if (!(e.ctrlKey || e.shiftKey || e.altKey)) {
      newItems.forEach(
        (x, i) => (x.selected = i === index ? !newItems[index].selected : false)
      );
    } else {
      newItems[index].selected = !newItems[index].selected;
    }

    const newNoneSelected = items.filter((x) => x.selected).length === 0;

    setItems(newItems);
    setNoneSelected(newNoneSelected);

    var result = new Map<string, boolean>(
      newItems.map((x) => [x.key, x.selected || newNoneSelected])
    );
    onSelectionChanged(result);
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <OverlayTrigger
            overlay={<Tooltip id={`ToolTip-${item.key}`}>{item.key}</Tooltip>}
            placement="bottom"
          >
            <div
              key={item.key}
              className={`${
                !(nonSelected || item.selected) ? "deselected" : ""
              } ${
                item.selected ? "bg-white border" : ""
              } slicerItem rounded ml-1 p-1`}
              onClick={(e) => handleClick(e, item.key, index)}
            >
              <img
                src={item.imgSrc}
                // title={item.key}
                alt={item.key}
                style={{ height: "25px", cursor: "pointer" }}
              />
            </div>
          </OverlayTrigger>
        );
      })}
    </>
  );
}
