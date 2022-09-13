import { styled, Box, Stack, Typography, IconButton} from "@mui/material";
import { CustomChip } from "../aboutme";

const CustomBox = styled(Box)(() => ({
    boxShadow: "0 2px 3px rgb(0, 0, 0, 0.2), 0 3px 6px rgb(0, 0, 0, 0.16)",
    borderRadius : 10,
    cursor : 'pointer'
}));

const imgStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '150%',
    height: 'auto',
}

const ProjectCard = ({ title, description, imageURL, visitIcon, tools, bgcolor="white", width=500, height=350}) => {
  return (
    <Stack spacing={1} width={width}>
        <CustomBox
        sx={{
            bgcolor,
            width,
            height,
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        }}
        >
            <CustomBox sx={{overflow : 'hidden', width : '90%', height : '90%', bgcolor : 'white', position : 'relative'}}>
                <img src={imageURL} style={imgStyle} />
            </CustomBox>
        </CustomBox>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography color='primary' fontWeight='medium' variant="h5">{title}</Typography>
            <IconButton color="primary">
                {visitIcon}
            </IconButton>
        </Stack>
        <Typography color='primary'>{description}</Typography>
        {
            tools && <>
            <Typography color='primary' variant='h6'>Tools</Typography>
            <Stack direction='row' spacing={1}>
                {
                    tools.map(tool => (
                        <CustomChip label={tool} />
                    ))
                }
            </Stack>
            </>
        }
    </Stack>
  );
};

export default ProjectCard;
