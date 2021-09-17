import Users from "./pages/Users";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Users />
      </div>
    </ThemeProvider>
  );
}

export default App;
