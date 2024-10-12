import { Box } from "@fuegokit/react";
import { TodosApp, WelcomeBanner } from "./components";
import { invoke } from "@forge/bridge";
// Define an interface for the expected returned data
interface ExampleReturnData {
  example: string;
}

function App() {
  // placeholder:
  invoke("exampleFunctionKey", { name: "World" })
    .then((returnedData) => {
      // Use a type assertion here to let TypeScript know the expected type
      const data = returnedData as ExampleReturnData;
      console.log(data.example);
    })
    .catch((error) => {
      console.error("Error invoking the resolver:", error);
    });

  return (
    <Box
      sx={{
        backgroundColor: "elevation.surface.default.[default]",
        width: "100%",
      }}
    >
      <WelcomeBanner />
      <TodosApp />
    </Box>
  );
}

export default App;
