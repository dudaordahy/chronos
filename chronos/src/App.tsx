import { TaskContextProvider } from "./contexts/taskContext/taskContextProvider";
import { Home } from "./pages/home";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}