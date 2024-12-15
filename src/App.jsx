import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const App = () => {
  const [configValue, setConfigValue] = useState("");

  useEffect(() => {
    const initializeTableau = async () => {
      try {
        // Ensure Tableau Extensions API is available
        if (!window.tableau) {
          throw new Error("Tableau Extensions API is not available.");
        }

        const tableau = window.tableau;

        // Initialize the Tableau Extensions API with a configure callback
        await tableau.extensions.initializeAsync({
          configure: configure,
        });

        console.log("Tableau Extensions API Initialized");

        // Retrieve the saved settings value
        const savedConfigValue = tableau.extensions.settings.get("configValue");
        console.log("Retrieved configValue:", savedConfigValue);

        // Set the retrieved value in the state
        setConfigValue(savedConfigValue || "No value saved");
      } catch (error) {
        console.error("Error initializing Tableau Extensions API:", error);
      }
    };

    // Configure function for the context menu
    const configure = () => {
      const popupUrl = `${window.location.origin}/configure`;

      tableau.extensions.ui
        .displayDialogAsync(popupUrl, "5", { height: 500, width: 500 })
        .then((closePayload) => {
          console.log(
            "Configuration dialog closed with payload:",
            closePayload
          );

          // Refresh the saved config value after the dialog closes
          const refreshedValue = tableau.extensions.settings.get("configValue");
          setConfigValue(refreshedValue || "No value saved");
        })
        .catch((error) => {
          if (error.errorCode === tableau.ErrorCodes.DialogClosedByUser) {
            console.log("Dialog was closed by the user.");
          } else {
            console.error("Error displaying dialog:", error);
          }
        });
    };

    initializeTableau();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Hello, Tableau Extension with Simple Library Loading!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Current Configuration Value: {configValue}
      </Typography>
      <Button variant="contained" color="primary" sx={{ m: 1 }}>
        Primary Button
      </Button>
      <Button variant="contained" color="secondary" sx={{ m: 1 }}>
        Secondary Button
      </Button>
    </Box>
  );
};

export default App;
