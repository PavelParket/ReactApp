import { Box, Button, Grid2 } from '@mui/material';
import { useState } from 'react';

function Square({ value, onSquareClick }) {
   return <Button
      variant='outlined'
      className='square'
      onClick={onSquareClick}
      sx={{ width: 25, height: 64 }}
   >{value}</Button>
}

function winner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];

   for (const element of lines) {
      const [a, b, c] = element;

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
         return squares[a];
   }
   return null;
}

export default function TicTacToe() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState(true);

   function handleClick(i) {
      if (squares[i] || winner(squares)) return;

      const nextSquares = squares.slice();

      if (xIsNext) {
         nextSquares[i] = "X";
      }
      else {
         nextSquares[i] = "O";
      }

      setSquares(nextSquares);
      setXIsNext(!xIsNext);
   }

   function reset() {
      const nextSquares = Array(9).fill(null);
      setXIsNext(true);
      setSquares(nextSquares);
   }

   const win = winner(squares);
   let status;
   if (win) status = "Winner: " + win;
   else status = "Next player: " + (xIsNext ? "X" : "O");

   return (
      <Grid2 container justifyContent="center" alignItems="center">
         <Box component="section" sx={{ width: 200 }}>
            <div className='status' style={{ textAlign: 'center' }}>{status}</div>
            <div className='firstLine'>
               <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
               <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
               <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='secondLine'>
               <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
               <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
               <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='thirdLine'>
               <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
               <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
               <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <Button
               className='reset'
               onClick={reset}
               variant='contained'
               sx={{ marginTop: 1, backgroundColor: 'grey' }}
            >Reset
            </Button>
         </Box>
      </Grid2>
   );
};
