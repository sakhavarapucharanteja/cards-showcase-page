import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contacts/ContactSlice";
import { AppDispatch } from "../app/store";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddContact: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleAddContact = () => {
    if (name.trim() !== "" && number.trim() !== "") {
      dispatch(
        addContact({
          id: Date.now(),
          name,
          number,
        })
      );
      setName("");
      setNumber("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "20px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Contact Details
      </Typography>

      <TextField
        label="Enter Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />

      <TextField
        label="Enter Number"
        variant="outlined"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddContact}
        fullWidth
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default AddContact;
`;

const ShowcaseModalDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold">🧩 Interactive Component Demo</h1>

      <div className="border p-4 rounded bg-gray-50">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Open Modal
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-80">
              <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
              <p className="mb-4 text-gray-700">
                This is a Contact management code.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">📄 Code Snippet</h2>
              <SyntaxHighlighter
                language="tsx"
                style={oneDark}
                wrapLines
                wrapLongLines
              >
              {code}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default ShowcaseModalDemo;
