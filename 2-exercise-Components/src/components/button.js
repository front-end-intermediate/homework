import React from "react";

function Button({ color, borderColor, children }) {
  return (
    <button
      style={{
        border: "2px solid",
        color,
        borderColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

export function Buttons() {
  return (
    <div>
      <Button color="red" borderColor="red" children="Cancel Me" />

      {/* <button
        style={{
          border: "2px solid",
          color: "red",
          borderColor: "red",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Cancel
      </button> */}

      <Button color="green" borderColor="green" children="Confirm Me" />

      {/* <button
        style={{
          border: "2px solid",
          color: "green",
          borderColor: "green",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Confirm
      </button> */}
    </div>
  );
}
