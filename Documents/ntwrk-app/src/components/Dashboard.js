import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, Container, Paper, List, ListItem, ListItemText, 
  IconButton, Fab, Dialog, DialogTitle, DialogContent, 
  DialogActions, Button, AppBar, Toolbar, Link, Card, CardContent, Snackbar, Alert, TextField, InputAdornment
} from '@mui/material';
import { Add as AddIcon, Info as InfoIcon, Search as SearchIcon } from '@mui/icons-material';
import NetworkBackground from './NetworkBackground';
import StreakMilestoneTree from './StreakCounter';
import useContactForm from './hooks/useContactForm';
import ContactFields from './ContactFields';
import { useNavigate } from 'react-router-dom';

const EditContactDialog = ({ open, handleClose, selectedContact, handleSaveContact }) => {
  const [editedContact, setEditedContact] = React.useState(selectedContact || {});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    handleSaveContact(editedContact);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{selectedContact ? 'Edit Contact' : 'Add New Contact'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={editedContact.name || ''}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={editedContact.email || ''}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="phone"
          label="Phone"
          type="tel"
          fullWidth
          value={editedContact.phone || ''}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="nextCheckIn"
          label="Next Check-in Date"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={editedContact.nextCheckIn || ''}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="frequency"
          label="Reminder Frequency (days)"
          type="number"
          fullWidth
          value={editedContact.frequency || ''}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="birthday"
          label="Birthday"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={editedContact.birthday || ''}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="topics"
          label="Topics to Talk Abou (comma separated)"
          fullWidth
          value={editedContact.topics || ''}
          onChange={handleInputChange}
        />
        <TextField
          select
          label="Preferred Communication Method"
          name="preferredCommunicationMethod"
          value={editedContact.preferredCommunicationMethod || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            style: {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              shrink: true,
              width: '100%',
            },
          }}
          InputProps={{
            style: {
              paddingRight: '10', // Ensure padding is adjusted to fit the label correctly
            },
          }}
        >
          <option value="na"> </option>
          <option value="Email">Email</option>
          <option value="Text">Text</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="LinkedIn">LinkedIn</option>
        </TextField>
        <TextField
          margin="dense"
          name="notes"
          label="Notes"
          multiline
          rows={4}
          fullWidth
          value={editedContact.notes || ''}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// ... (keep the useStreak function as is)
const useStreak = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const calculateStreak = () => {
      const today = new Date();
      let currentStreak = 0;
      let lastCheckIn = localStorage.getItem('lastCheckIn');

      if (lastCheckIn) {
        lastCheckIn = new Date(lastCheckIn);
        const diffDays = Math.floor((today - lastCheckIn) / (1000 * 60 * 60 * 24));

        if (diffDays === 0 || diffDays === 1) {
          currentStreak = parseInt(localStorage.getItem('streak') || '0', 10);
          if (diffDays === 1) {
            currentStreak += 1;
          }
        } else {
          currentStreak = 0;
        }
      }

      localStorage.setItem('streak', currentStreak.toString());
      localStorage.setItem('lastCheckIn', today.toISOString());
      setStreak(currentStreak);
    };

    calculateStreak();
  }, []);

  return streak;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    contacts, openDialog, selectedContact, handleOpenDialog, handleCloseDialog,
    handleSaveContact, calculateDaysUntilNextCheckIn
  } = useContactForm();

  const streak = useStreak();
  const [milestones, setMilestones] = useState([1, 7, 14, 21, 30, 60, 90, 120, 150, 180, 365]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (milestones.includes(streak)) {
      setOpenSnackbar(true);
    }
  }, [streak, milestones]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSignOut = () => {
    // Add your sign-out logic here (e.g., clear user session, tokens, etc.)
    localStorage.removeItem('userToken'); // Example
    navigate('/');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedContacts = [...filteredContacts].sort((a, b) => 
    calculateDaysUntilNextCheckIn(a) - calculateDaysUntilNextCheckIn(b)
  );

  const handleAddContact = () => {
    handleOpenDialog(null); // Open dialog with no selected contact (for adding)
  };

  return (
    <Container>
      <NetworkBackground />
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="inherit" component={Link} to="/" sx={{ flexGrow: 1 }}>
            ntwrk
          </Typography>
          <Button 
            variant="body1" 
            color="inherit" 
            component={Link} 
            to="/my-ntwrk"
            sx={{ textTransform: 'none', fontFamily: 'Fira Code, monospace', fontSize: 'inherit' }}
          >
            my ntwrk
          </Button>
          <Button 
            variant="body1" 
            color="inherit" 
            component={Link} 
            to="/signout"
            sx={{ textTransform: 'none', fontFamily: 'Fira Code, monospace', fontSize: 'inherit' }}
            onClick={handleSignOut}
          >
            sign out
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 8 }}>
        <Box sx={{ width: '45%' }}>
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            my ntwrk
          </Typography>
          <Box sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Search contacts"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '50px',
                  backgroundColor: '#f5f5f5',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                },
              }}
            />
          </Box>
          <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {sortedContacts.map((contact) => (
              <Card key={contact.id} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="div">{contact.name}</Typography>
                    <IconButton edge="end" aria-label="info" onClick={() => handleOpenDialog(contact)}>
                      <InfoIcon />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Next check-in: {calculateDaysUntilNextCheckIn(contact)} days
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </List>
        </Box>
        <Box sx={{ width: '45%' }}>
          <StreakMilestoneTree streak={30} /> 
        </Box>
      </Box>
      <Fab 
        aria-label="add" 
        sx={{ 
          position: 'fixed', 
          bottom: 16, 
          right: 16, 
          backgroundColor: 'black', 
          color: 'white' 
        }} 
        onClick={handleAddContact}
      >
        <AddIcon />
      </Fab>
      <EditContactDialog 
        open={openDialog} 
        handleClose={handleCloseDialog}
        selectedContact={selectedContact}
        handleSaveContact={handleSaveContact}
      />
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Congratulations! You've reached a new milestone!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Dashboard;