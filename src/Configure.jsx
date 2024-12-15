import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Configure = () => {
  const [configValue, setConfigValue] = useState("");

  useEffect(() => {
    const tableau = window.tableau;

    tableau.extensions.initializeDialogAsync().then((payload) => {
      console.log("Dialog payload received:", payload);
      setConfigValue(tableau.extensions.settings.get("configValue"));
    });
  }, []);

  const saveSettings = () => {
    const tableau = window.tableau;

    // Save settings in Tableau
    tableau.extensions.settings.set("configValue", configValue);
    tableau.extensions.settings.saveAsync().then(() => {
      // Close the dialog with a success message
      tableau.extensions.ui.closeDialog("Settings saved successfully");
    });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Configure Your Extension
      </Typography>
      <TextField
        label="Configuration Value"
        value={configValue}
        onChange={(e) => setConfigValue(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={saveSettings}>
        Save
      </Button>
    </Box>
  );
};

export default Configure;
