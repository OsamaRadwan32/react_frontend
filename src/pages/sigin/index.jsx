import React from "react";
import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function Signin() {
  const { register } = useForm();

  return (
    <Container>
      <FormContainer>
        <Typography fontSize={"45px"}>Sig in</Typography>
        <TextField
          label={"userName"}
          style={{ width: "70%" }}
          {...register("userName")}
        />
        <TextField
          label={"password"}
          style={{ width: "70%" }}
          {...register("password")}
          type="password"
        />
        <LoadingButton variant="contained" style={{ width: "70%" }}>
          submit
        </LoadingButton>
      </FormContainer>
    </Container>
  );
}
