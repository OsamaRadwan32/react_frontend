import React from "react";
import "./styles.css";
import styled from "styled-components";
import NavBar from "../../components/navBar";

export default function Upload() {
  const handleDropContainerClick = () => {
    const inputElement = document.getElementById("myFile");
    inputElement.click();
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div class="drop-container">
          <div onClick={handleDropContainerClick} class="drop-zone">
            <span class="drop-zone__prompt">Click to upload</span>
            <input
              type="file"
              name="myFile"
              id="myFile"
              class="drop-zone__input"
              onChange={(e) => {
                console.log(e);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  backdrop-filter: blur(10px);
`;
