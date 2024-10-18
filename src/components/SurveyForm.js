import React, { useState } from 'react';
import { Container, Typography, Grid, Radio, RadioGroup, FormControlLabel, Button, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 
import { useNavigate } from 'react-router-dom'; // Ensure this import is included
import './SurveyForm.css';

const SurveyForm = () => {
  const [date, setDate] = useState('');
  const [rating1, setRating1] = useState('');
  const [rating2, setRating2] = useState('');
  const [rating3, setRating3] = useState('');
  const [rating4, setRating4] = useState('');
  const [rating5, setRating5] = useState('');
  const [isOpen, setIsOpen] = useState(true); 

  const navigate = useNavigate(); // Correctly initialize useNavigate

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Responses: \nRating 1: ${rating1}\nRating 2: ${rating2}\nRating 3: ${rating3}\nRating 4: ${rating4}\nRating 5: ${rating5}\nDate: ${date}`);
    navigate('/kiosk'); // Redirect to /kiosk after submission
  };

  const handleClose = () => {
    setIsOpen(false); 
    navigate('/kiosk'); // Redirect to /kiosk on close
  };

  if (!isOpen) return null; 

  return (
    <Container className="scrollable-container" maxWidth="md" style={{ marginTop: '20px', textAlign: 'center' }}>
      <IconButton 
        onClick={handleClose} 
        style={{ position: 'absolute', top: '10px', right: '10px' }} 
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>CLIENT FEEDBACK AND SATISFACTORY SURVEY</Typography>
      <Typography variant="body1" paragraph>
        Mabuhay! Mahalaga sa amin ang iyong mga puna at suhestiyon. Mangyaring kumpletuhin ang survey na ito sapagkat gagamitin 
        namin ang iyong mga tugon upang patuloy na mapabuti ang aming mga serbisyo. Aabutin lamang ito ng humigit-kumulang 1 
        minuto ng iyong oras. Maraming salamat!
      </Typography>

      <Typography variant="h4" gutterBottom>Data Privacy Notice</Typography>
      <Typography variant="body1" paragraph>
        Ang survey ay nagpapanatili at nagpoprotekta sa pagiging pribado ng mga personal na datos na ibinabahagi mo sa amin.
        Nangangako kami na ipatupad ang angkop na mga hakbang sa seguridad upang mapanatili ang pagiging kumpidensyal,
        integridad, at pagkakaroon ng iyong mga personal na datos alinsunod sa RA 10173 o ang Data Privacy Act ng 2012.
      </Typography>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Pumili ng Petsa:</Typography>
      <TextField
        type="date"
        value={date}
        onChange={handleDateChange}
        variant="outlined"
        fullWidth
        style={{ marginTop: '10px', maxWidth: '300px', margin: '0 auto' }}
      />
      <br/><br/>

      <form onSubmit={handleSubmit}>
        {[ 
          { question: 'Gaano ka nasiyahan sa bilis ng pagtugon sa iyong transaksyon?', value: rating1, setValue: setRating1 },
          { question: 'Gaano ka nasiyahan sa mga hakbang at mga hininging dokumento?', value: rating2, setValue: setRating2 },
          { question: 'Gaano ka nasiyahan sa pagiging magalang at matapat ng kawani?', value: rating3, setValue: setRating3 },
          { question: 'Gaano ka nasiyahan sa kakayahan ng kawani?', value: rating4, setValue: setRating4 },
          { question: 'Gaano ka nasiyahan sa naging serbisyo ng opisina ng San Pablo Mega Capitol?', value: rating5, setValue: setRating5 },
        ].map(({ question, value, setValue }, index) => (
          <div key={index}>
            <Typography variant="h6" gutterBottom>{question}</Typography>
            <RadioGroup row value={value} onChange={(e) => setValue(e.target.value)}>
              <Grid container spacing={2} justifyContent="center">
                {[1, 2, 3, 4, 5].map((val, i) => (
                  <Grid item key={i}>
                    <FormControlLabel
                      value={String(val)}
                      control={<Radio />}
                      label={<span style={{ fontSize: '50px' }}>{['😡', '😟', '😐', '😊', '😁'][i]}</span>}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </div>
        ))}

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Isumite
        </Button>
      </form>
    </Container>
  );
};

export default SurveyForm;
