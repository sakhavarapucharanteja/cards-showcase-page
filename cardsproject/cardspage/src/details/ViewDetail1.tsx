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
import { Padding } from "@mui/icons-material";
import "./Images.css";

const ViewDetail1 = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        🧩 Key Features
      </Typography>
      <List>
        {["Add Contact", "Edit Contact", "Delete Contact", "View Contact"].map(
          (feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          )
        )}
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
        }}
      >
        <img
          src="/assets/Screenshot_10-5-2025_2002_thriving-cannoli-525e64.netlify.app.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot_10-5-2025_20025_thriving-cannoli-525e64.netlify.app.png"
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
          <strong>🧩 Data Validation and Consistency</strong>: Use libraries
          like Yup with Formik for validation. Enforce formats and normalize
          input.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📦 Persistent Data Storage</strong>: Use LocalStorage for
          small projects, IndexedDB or backend for scalability.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🔍 Efficient Search & Filtering</strong>: Debounce search
          input, use filter methods or Fuse.js for fuzzy search.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🧑‍💼 Handling Duplicates</strong>: Implement duplicate-check
          mechanism, notify and offer merge options.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📱 Responsive UI Design</strong>: Use Material UI,
          Flexbox/Grid layouts, and test on multiple devices.
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
