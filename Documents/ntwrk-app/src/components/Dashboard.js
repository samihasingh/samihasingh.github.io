import React, { useState } from 'react';
import { 
  Box, Typography, Container, Paper, List, ListItem, ListItemText, 
  IconButton, LinearProgress, Fab, Dialog, DialogTitle, DialogContent, 
  DialogActions, Button, TextField, AppBar, Toolbar, Link, Card, CardContent 
} from '@mui/material';
import { Add as AddIcon, Info as InfoIcon } from '@mui/icons-material';
import NetworkBackground from './NetworkBackground';

const Dashboard = () => {
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

  const sortedContacts = [...contacts].sort((a, b) => 
    calculateDaysUntilNextCheckIn(a) - calculateDaysUntilNextCheckIn(b)
  );

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

  const calculateProgress = () => {
    const overdueContacts = contacts.filter(contact => calculateDaysUntilNextCheckIn(contact) <= 0);
    return ((contacts.length - overdueContacts.length) / contacts.length) * 100;
  };

  return (
    <Container>
      <NetworkBackground />
      <AppBar position="fixed" sx={{ backgroundColor: 'black', width: '100%' }}>
        <Toolbar>
          <Link href="/" color="inherit" underline="none" sx={{ fontSize: '1rem', marginRight: 'auto' }}>ntwrk</Link>
          <Link href="/my-ntwrk" color="inherit" underline="none" sx={{ fontSize: '1rem', margin: '0 1rem' }}>my ntwrk</Link>
          <Link href="/signout" color="inherit" underline="none" sx={{ fontSize: '1rem', marginLeft: 'auto' }}>sign out</Link>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: 8 }}>
        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          my ntwrk
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Check-in Progress</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress 
                variant="determinate" 
                value={calculateProgress()} 
                sx={{ 
                  height: 10, 
                  borderRadius: 5, 
                  backgroundColor: '#F1EFE7', 
                  '& .MuiLinearProgress-bar': { backgroundColor: '#000' } 
                }} 
              />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="textSecondary">{`${Math.round(calculateProgress())}%`}</Typography>
            </Box>
          </Box>
        </Paper>
        <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {sortedContacts.map((contact) => (
            <Card key={contact.id} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">{contact.name}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">Next check-in: {calculateDaysUntilNextCheckIn(contact)} days</Typography>
                <IconButton edge="end" aria-label="info" onClick={() => handleOpenDialog(contact)}>
                  <InfoIcon />
                </IconButton>
                {selectedContact && selectedContact.id === contact.id && (
                  <>
                    <Typography sx={{ mb: 1.5 }}>Birthday: {contact.birthday}</Typography>
                    <Typography sx={{ mb: 1.5 }}>Topics: {contact.topics}</Typography>
                    <Typography sx={{ mb: 1.5 }}>Preferred Communication: {contact.communicationMethod}</Typography>
                    <Typography sx={{ mb: 1.5 }}>Notes: {contact.notes}</Typography>
                    <Typography sx={{ mb: 1.5 }}>Email: {contact.email}</Typography>
                    <Typography sx={{ mb: 1.5 }}>Phone: {contact.phone}</Typography>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </List>
        <Fab 
          aria-label="add" 
          sx={{ 
            position: 'fixed', 
            bottom: 16, 
            right: 16, 
            backgroundColor: 'black', 
            color: 'white', 
            width: 40, 
            height: 40 
          }} 
          onClick={() => handleOpenDialog()}
        >
          <AddIcon />
        </Fab>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedContact ? 'Edit Contact' : 'Add New Contact'}</DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleSaveContact} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                defaultValue={selectedContact?.name || ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastCheckIn"
                label="Last Check-in Date"
                name="lastCheckIn"
                type="date"
                defaultValue={selectedContact?.lastCheckIn || new Date().toISOString().split('T')[0]}
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
                defaultValue={selectedContact?.frequency || 30}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="birthday"
                label="Birthday"
                name="birthday"
                type="date"
                defaultValue={selectedContact?.birthday || ''}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="topics"
                label="Topics to Talk About"
                name="topics"
                defaultValue={selectedContact?.topics || ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                select
                id="communicationMethod"
                label="Preferred Communication Method"
                name="communicationMethod"
                defaultValue={selectedContact?.communicationMethod || 'Email'}
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
                defaultValue={selectedContact?.notes || ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                defaultValue={selectedContact?.email || ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                defaultValue={selectedContact?.phone || ''}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} sx={{ color: 'black' }}>Cancel</Button>
            <Button onClick={handleSaveContact} sx={{ color: 'black' }}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Dashboard;