import { Container, Stack } from "@mui/material";
import thumbnail from "../assets/thumbnail.jpg";

export default function Thumbnail({ children }) {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{ mt: 0, mb: 5, pl: 0, pr: 0 }}
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 80%",
        backgroundSize: "cover",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        maxWidth="lg"
        sx={{ pt: "420px" }}
      >
        {children}
      </Stack>
    </Container>
  );
}
