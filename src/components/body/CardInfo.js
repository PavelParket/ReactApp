import { Card, CardContent, Typography } from "@mui/material";

function CardInfo({ student }) {
   return (
      <Card sx={{ backgroundColor: "#c5cae9" }}>
         <CardContent>
            <Typography sx={{ fontSize: 14 }}>
               ID: {student.id}
            </Typography>
            <Typography variant="h5">
               {student.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
               Group: {student.group}
            </Typography>
         </CardContent>
      </Card>
   );
}

export default CardInfo;
