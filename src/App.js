import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Routes from "./routes/index";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
