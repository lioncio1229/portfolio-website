import { Typography, Box, Button} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { styled } from '@mui/material/styles';

const InlineButton = styled(Button)(({theme}) => ({
    backgroundColor: 'white',
    fontSize: 13,
    textTransform: 'none',
    padding: '2px 10px',
    '&:hover': {
      backgroundColor: 'white',
    },
}));

const DescriptionBox = ({description, noOfLinesToShowmore=3, minHeight=45}) => {
    const [isExpanded, setExpand] = useState(false);
    const [isExpandable, setExpandable] = useState(false);
    const descriptionBoxRef = useRef();

    useEffect(() => {
        if(!descriptionBoxRef.current) return;
        const textElement = descriptionBoxRef.current;
        const lineHeight = parseInt(getComputedStyle(textElement).lineHeight);
        const visibleLines = Math.floor(textElement.scrollHeight / lineHeight);
        if(visibleLines >= noOfLinesToShowmore) setExpandable(true);
        else setExpandable(false);
      }, [descriptionBoxRef.current]);

    return ( 
    <Box
        sx={{
            bgcolor: "white",
            borderRadius: 3,
            p: 2,
            pb: (isExpanded ? 4.5 : 2),
            position: "relative",
        }}
        >
        {
            description && isExpandable &&
            <InlineButton
            sx={{ position: "absolute", bottom: 15, right: 10 }}
            onClick={() => setExpand(!isExpanded)}
            >
            { isExpanded ? 'see less' : '...see more'}
            </InlineButton>
        }
        <Typography
            ref={descriptionBoxRef}
            color="primary"
            sx={{ fontSize: 14, height: (isExpanded ? 'auto' : minHeight), overflow: "hidden", wordBreak: "break-word"}}
        >
            {description}
        </Typography>
    </Box> );
}
 
export default DescriptionBox;