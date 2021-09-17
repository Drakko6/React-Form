import Users from "./pages/Users";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {" "}
        <Users />
      </div>
    </ThemeProvider>
  );
}

export default App;
