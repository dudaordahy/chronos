import { TaskContextProvider } from "./contexts/taskContext";
import { Home } from "./pages/home";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}