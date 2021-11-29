import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "react-query";
import { Router } from "./src/routes";
import { queryClient } from "./src/services/api";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
