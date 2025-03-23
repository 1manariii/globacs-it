import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Context from "./context/Context";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Context />
  </QueryClientProvider>
  );
}

export default App;