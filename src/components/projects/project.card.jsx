import { styled, Box, Stack, Typography, IconButton, Button} from "@mui/material";
import { CustomChip } from "../aboutme";
import { useSpring, animated } from "react-spring";


const CustomBox = styled(Box)(() => ({
    boxShadow: "0 2px 3px rgb(0, 0, 0, 0.2), 0 3px 6px rgb(0, 0, 0, 0.16)",
    borderRadius : 10,
    cursor : 'pointer'
}));

const absoluteCenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}

const imgStyle = {
    ...absoluteCenter,
    width: '150%',
    height: 'auto',
}

const ProjectCard = ({
  title,
  description,
  imageURL,
  visitIcon,
  tools,
  bgcolor = "white",
  width = 500,
  height = 350,
  titleFontSize = {xs : 24, sm: "2.5vw", md: "2vw" },
  descriptionFontSize = {sm : "2vw", md : "1.57vw", lg : 18},
  onViewClick = null,
  onViewAboutClick = null,
  onTitleButtonClick
}) => {

  const [style, api] = useSpring(() => ({from : {zoom : 150, blur : 0}}));

  return (
    <Stack spacing={1} width={width}>
      <CustomBox
        sx={{
          bgcolor,
          width,
          height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={() => api.start({ zoom: 160, blur: 2 })}
        onMouseLeave={() => api.start({ zoom: 150, blur: 0 })}
      >
        <CustomBox
          sx={{
            overflow: "hidden",
            width: "90%",
            height: "90%",
            bgcolor: "white",
            position: "relative",
          }}
        >
          <animated.div style={{ opacity: style.blur }}>
            <Stack
              sx={{ ...absoluteCenter, zIndex: 2 }}
              direction="row"
              gap={2}
            >
              {
                onViewClick && <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{ width: 170 }}
                  onClick={onViewClick}
                >
                  <Typography color="white" fontSize={12}>
                    View
                  </Typography>
                </Button>
              }
              {
                onViewAboutClick && <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{ width: 170}}
                  onClick={onViewAboutClick}
                >
                  <Typography color="white" fontSize={10}>
                    Video
                  </Typography>
                </Button>
              }
            </Stack>
          </animated.div>
          <animated.img
            src={imageURL}
            style={{
              ...imgStyle,
              filter: style.blur.to((v) => `blur(${v}px)`),
              width: style.zoom.to((v) => `${v}%`),
            }}
          />
        </CustomBox>
      </CustomBox>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          color="primary"
          fontWeight="medium"
          sx={{ fontSize: titleFontSize }}
        >
          {title}
        </Typography>
        <IconButton onClick={onTitleButtonClick} color="primary">{visitIcon}</IconButton>
      </Stack>
      <Typography color="primary" sx={{ fontSize: descriptionFontSize }}>
        {description}
      </Typography>
      {tools && (
        <>
          <Typography color="primary" variant="h6">
            Tools
          </Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            {tools.map((tool) => (
              <CustomChip key={tool} label={tool} />
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default ProjectCard;
