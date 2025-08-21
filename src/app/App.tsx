import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "../contexts/ThemeContext";
import { TodoListView } from "../view/todo";
import { Toaster } from "react-hot-toast";

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
