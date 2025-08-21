import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { ThemeProvider } from "../contexts/ThemeContext";
import { store } from "../store";
import { TodoListView } from "../view/todo";

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <TodoListView />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
