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
import ImageIcon from "@mui/icons-material/Image";
import GitHubIcon from "@mui/icons-material/GitHub";

const ViewDetail1 = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        🧩 Key Features
      </Typography>
      <List>
        {[
          "Add New Recipe",
          "Edit Existing Recipes",
          "Delete Recipe",
          " View Recipe Details",
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
          src="\assets\Screenshot 2025-05-12 110805.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 110900.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 112229.png"
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
          <strong>📦 Managing Recipe Data</strong>: Challenge: Storing and
          retrieving a dynamic list of recipes (with text + images). Solution:
          Use localStorage or IndexedDB for offline/local storage.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📷 Image Handling</strong>: Challenge: Uploading, displaying,
          and storing images correctly. Solution: Store images in the public
          folder or as base64 strings.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🧪 Form Validation</strong>: Challenge: Ensuring users fill in
          all required recipe info. Solution: Use Formik + Yup for form state
          and schema validation.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🗃️ Duplicate Recipes</strong>: Challenge: Users may
          unknowingly add the same recipe twice. Solution: Check for existing
          recipe names or ingredient combinations before saving.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📱 Responsive Design</strong>: Challenge: App looks broken or
          cluttered on small screens. Solution: Use Material UI or CSS
          Flexbox/Grid for layout.
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
