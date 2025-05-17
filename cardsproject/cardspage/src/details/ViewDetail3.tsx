import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Divider,
  Stack,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GitHubIcon from "@mui/icons-material/GitHub";

const ViewDetail1 = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        🧩 Key Features
      </Typography>
      <List>
        {[
          "Current Weather Information",
          "Forecast",
          "Location Search",
          "Weather Details",
        ].map((feature, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        🖼️ Screenshots of UI
      </Typography>
      <Box
        sx={{
          border: "1px dashed gray",
          borderRadius: 2,
          p: 2,
          mb: 3,
          textAlign: "center",
        }}
      >
        <img
          src="\assets\Screenshot_10-5-2025_195946_localhost.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />
        <Typography variant="body2" color="textSecondary"></Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        🚧 Challenges & Solutions
      </Typography>
      <ol>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🔗 Accurate & Reliable Weather Data</strong>: Challenge:
          Choosing a reliable API for real-time and forecast weather data.
          Solution: Use reputable APIs like OpenWeatherMap, WeatherAPI, or
          AccuWeather.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📍 Location Handling & Permissions</strong>: Challenge:
          Getting user location via GPS or IP can fail or require permission.
          Solution: Use browser’s Geolocation API with graceful fallbacks (like
          city name input).
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📶 Handling Offline Mode</strong>: Challenge: App can't
          function without internet access. Solution: Store the last fetched
          weather data in localStorage or IndexedDB. Show a message like:
          "You're offline. Showing last updated data."
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📊 Data Parsing & Formatting</strong>: Challenge: Weather APIs
          return raw data (e.g., Kelvin temperature, UNIX timestamps, etc.)
          Solution: Convert units and time formats before display (Kelvin →
          Celsius, UNIX timestamp → readable date/time).
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>💅 UI/UX for Diverse Conditions</strong>: Challenge:
          Displaying all types of weather clearly: fog, storm, snow, etc.
          Solution: Use dynamic icons or animations (like react-icons-weather or
          Lottie).
        </li>
      </ol>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        🔗 GitHub Link
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <GitHubIcon />
        <Link
          href="https://github.com/sakhavarapucharanteja/sprint1-task.git"
          target="_blank"
          rel="noopener"
        >
          github.com/sakhavarapucharanteja/sprint1-task
        </Link>
      </Stack>
    </Container>
  );
};

export default ViewDetail1;
