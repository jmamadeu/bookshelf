import { QueryClientProvider } from "react-query";
import { Home } from "./src/screens/home";
import { queryClient } from "./src/services/api";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
