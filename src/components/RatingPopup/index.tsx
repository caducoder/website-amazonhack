import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Rating, Typography } from "@material-tailwind/react";

const ratingLabel = [
  "Péssima",
  "Ruim",
  "Regular",
  "Boa",
  "Excelente"
]

function RatingPopup() {
  const [open, setOpen] = React.useState(false);
  const [rated, setRated] = React.useState(0);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        color='blue'
        variant="gradient"
        className='w-fit ml-8 mb-4'
      >
        Classificar internet da sua região
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Qualidade da internet</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col items-center gap-2 py-4">
            <Rating value={0} onChange={(value) => setRated(value)} />
            <Typography color="blue-gray" className="font-medium">
              {rated != 0 && ratingLabel[rated - 1]}
            </Typography>
          </div>
          Sua avaliação nos ajuda a tomar medidas para aprimorar a experiência online para todos. Obrigado por sua colaboração!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default RatingPopup