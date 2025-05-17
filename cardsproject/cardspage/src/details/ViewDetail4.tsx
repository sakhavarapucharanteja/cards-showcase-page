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
          "Job Listings",
          "Job Search & Filters",
          "Job Details Page",
          "Authentication & Authorization",
          "User Dashboards",
          "Job Posting",
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
          src="\assets\Screenshot 2025-05-12 112736.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 112548.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 112607.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 112835.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 112934.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 112949.png"
          style={{ maxWidth: "100%", display: "block" }}
          alt="UI Screenshot"
        />

        <img
          src="\assets\Screenshot 2025-05-12 113019.png"
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
          <strong>🔐 Authentication & Role Management</strong>:Challenge:
          Handling different user roles (Admin, Employer, Job Seeker) securely
          and correctly. Solution: Use JWT tokens with role-based claims.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🧾 Job Posting & Validation</strong>: Challenge: Preventing
          spam or invalid job posts. Solution: Use robust form validation (e.g.,
          Yup or server-side validation). Add CAPTCHA to prevent spam.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🔍 Search & Filter Performance</strong>: Challenge: Filtering
          large job datasets in real-time. Solution: Use server-side filtering &
          pagination. Implement Elasticsearch or database indexing for better
          search speed.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>📄 Resume Upload & File Handling</strong>: Challenge: Securely
          handling file uploads (PDF, DOCX). Solution: Use services like
          Cloudinary, AWS S3, or backend file storage. Validate file size and
          type before upload.
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>🛡️ Data Privacy & Security</strong>: Challenge: Protecting
          user data (resumes, contact info). Solution: Use HTTPS and encrypt
          sensitive data. Implement role-based access control.
        </li>
      </ol>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        🔗 GitHub Link
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <GitHubIcon />
        <Link
          href="https://github.com/sakhavarapucharanteja/job-boardx.git"
          target="_blank"
          rel="noopener"
        >
          github.com/sakhavarapucharanteja/job-boardx.git
        </Link>
      </Stack>
    </Container>
  );
};

export default ViewDetail1;
