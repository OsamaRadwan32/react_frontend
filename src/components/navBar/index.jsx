import React from "react";
import { Container, Link, LinksContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <LinksContainer>
        <Link onClick={() => navigate("/data")}>Data</Link>
        <Link onClick={() => navigate("/upload")}>Upload</Link>
        <Link onClick={() => navigate("/")}>Logout</Link>
      </LinksContainer>
    </Container>
  );
}
