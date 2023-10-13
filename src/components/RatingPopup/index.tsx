import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const ratingLabel = [
  "Péssima",
  "Ruim",
  "Regular",
  "Boa",
  "Excelente"
]

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${ratingLabel[value]}`;
}

function RatingPopup() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRatingConfirm = () => {
    console.log('Nota: ', value)
  }

  return (
    <>
      <Button
        variant="contained"
        color='secondary'
        className="bg-cyan text-white"
        sx={{ mb: 4 }}
        onClick={handleClickOpen}
      >
        Classificar internet da sua região
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Qualidade da internet
        </DialogTitle>
        <DialogContent dividers >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ textAlign: 'center' }}>{ratingLabel[value - 1]}</Box>
            )}
          </Box>
          <Typography gutterBottom>
            Sua avaliação nos ajuda a tomar medidas para aprimorar a experiência online para todos. Obrigado por sua colaboração!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='text' color='error'>Cancelar</Button>
          <Button autoFocus onClick={handleRatingConfirm} color='success'>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default RatingPopup