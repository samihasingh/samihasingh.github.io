import { useState } from 'react';

const useContactForm = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', lastCheckIn: '2023-05-01', frequency: 30, birthday: '1990-01-01', topics: 'work, family', communicationMethod: 'Email', notes: 'John likes to talk about technology.', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', lastCheckIn: '2023-06-15', frequency: 14, birthday: '1985-02-10', topics: 'travel, sports', communicationMethod: 'Text', notes: 'Jane is planning a trip to Japan.', email: 'jane@example.com', phone: '098-765-4321' },
    // Add more sample contacts as needed
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const calculateDaysUntilNextCheckIn = (contact) => {
    const lastCheckIn = new Date(contact.lastCheckIn);
    const nextCheckIn = new Date(lastCheckIn.getTime() + contact.frequency * 24 * 60 * 60 * 1000);
    const today = new Date();
    return Math.max(0, Math.ceil((nextCheckIn - today) / (1000 * 60 * 60 * 24)));
  };

  const handleOpenDialog = (contact = null) => {
    setSelectedContact(contact);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedContact(null);
  };

  const handleSaveContact = (event) => {
    event.preventDefault();
    // Logic to save or update contact
    handleCloseDialog();
  };

  return {
    contacts,
    openDialog,
    selectedContact,
    handleOpenDialog,
    handleCloseDialog,
    handleSaveContact,
    calculateDaysUntilNextCheckIn,
  };
};

export default useContactForm;