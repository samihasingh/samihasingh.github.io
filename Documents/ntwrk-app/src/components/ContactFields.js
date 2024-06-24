import React from 'react';
import { Box, TextField } from '@mui/material';

const ContactFields = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box component="form" sx={{ mt: 1 }}>
      {formData && (
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={formData.name || ''}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastCheckIn"
            label="Last Check-in Date"
            name="lastCheckIn"
            type="date"
            value={formData.lastCheckIn || ''}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="frequency"
            label="Reminder Frequency (days)"
            name="frequency"
            type="number"
            value={formData.frequency || ''}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="birthday"
            label="Birthday"
            name="birthday"
            type="date"
            value={formData.birthday || ''}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="topics"
            label="Topics to Talk About"
            name="topics"
            value={formData.topics || ''}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            select
            id="communicationMethod"
            label="Preferred Communication Method"
            name="communicationMethod"
            value={formData.communicationMethod || ''}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value="Email">Email</option>
            <option value="Text">Text</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Notes">Notes</option>
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="notes"
            label="Notes"
            name="notes"
            multiline
            rows={4}
            value={formData.notes || ''}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
          />
        </>
      )}
    </Box>
  );
};

export default ContactFields;