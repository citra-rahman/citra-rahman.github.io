import { Box, Typography, Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import { workProp } from "@/libs/type";

const textStyle = {
    typography: {
        xs: 'body2', md: 'body1'
    }
}
export default function WorkCard({ id, date, title, description, tags }: workProp) {
    return (
        <Box id={`work-${id}`} display='flex' flexDirection='row'>
            <Typography minWidth={120} sx={textStyle}>{date}</Typography>
            <Box display='flex' flexDirection='column'>
                <Typography sx={textStyle}>{title}</Typography>
                {
                    description.split(',').map((task, index) =>
                        <Typography key={index} sx={textStyle} gutterBottom>- {task}</Typography>
                    )
                }
                <Grid display='flex' flexDirection='row' spacing={1} container>
                    {
                        tags.split(',').map((tag, index) =>
                            <Grid key={index} item>
                                <Chip
                                    label={tag}
                                    color="secondary"
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: 'rgb(20, 44, 59, 0.6)',
                                        typography: { xs: 'caption', md: 'caption2' }
                                    }} />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Box >
    )
}