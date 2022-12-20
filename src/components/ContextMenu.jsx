import { memo } from "react";
import "./menu.css";

export const ContextMenu = memo(
  ({ isOpen, position, actions = [], onMouseLeave }) =>
    isOpen ? (
      <>
        <div
          id="contextMenu"
          className="context-menu"
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            zIndex: 1000,
            border: "solid 1 px #CCC",
            borderRadius: 3,
            backgroundColor: "white",
            padding: 5,
            display: "flex",
            flexDirection: "column",
          }}
          onMouseLeave={onMouseLeave}
        >
          <ul className="menu">
            <li className="share">
              <a>
                <i className="fa fa-share" aria-hidden="true"></i> Change Video
              </a>
            </li>
            <li className="rename">
              <a>
                <i className="fa fa-pencil" aria-hidden="true"></i> Edit name
              </a>
            </li>
            <li className="link">
              <a>
                <i className="fa fa-link" aria-hidden="true"></i> Copy Link
                Address
              </a>
            </li>

            <li className="trash">
              {actions.map((action) => (
                <a key={action.label} onClick={action.effect}>
                  <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                  {action.label}
                </a>
              ))}
            </li>
          </ul>
        </div>
        <div></div>
      </>
    ) : null
);
