import { Suspense } from "react";
import { useRoutes } from "react-router";
import routes from "~react-pages";

function App() {
  return (
    <div className="min-h-screen bg-pastel-peach-light font-jetbrains">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Suspense fallback={<div>Loading</div>}>
          {useRoutes(routes)}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
