import {
    styled,
    Grid,
    TextField,
    Typography,
    Snackbar,
    Alert
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import React, { useEffect, useState } from "react";
import useSendEmail from "./useSendEmail";
import useValidation from "./useValidation";

const CustomTextField = styled(TextField)(() => ({
    width: "100%",
  }));
  
const Form = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const [result, setResult] = useState('');
  
    const {hasError, errorInfo} = useValidation();
  
    const { send, sending } = useSendEmail(
      "service_lioncio1229",
      "template_8b7fs5z",
      "nEmSWQSF0ct99Bw9s",
      () => setResult('success'),
      () => setResult('error'),
    );
  
    const handleSendMessage = () => {
      setResult('');
      if(hasError(name, email, subject, message)) return;
      send({
        from_name : name,
        from_email : email,
        subject,
        message,
      });
    }
  
    useEffect(() => {
      if(result === 'success')
      {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }
    }, [result]);
  
    const SendResult = React.memo(() => 
      (
        result !== '' && <Snackbar
        open={result !== ''}
        autoHideDuration={3000}
        onClose={() => setResult('')}
      >
        <Alert onClose={() => setResult('')} severity={result} sx={{ width: "100%" }}>
          {result === "success"
            ? "Thankyou for sending me an email"
            : "Something went wrong"}
        </Alert>
        </Snackbar>
    ), [result]);
  
    const {empty : emptyName, wordExceed} = errorInfo.name;
    let nameValidation = {hasError : false, comment : ''};
    if(emptyName) nameValidation = {hasError : true, comment : 'Please add your name, thanks'};
    else if(wordExceed) nameValidation = {hasError : true, comment : 'Character Exceed'};
  
    const {empty : emptyEmail, invalidEmail} = errorInfo.email;
    let emailValidation = {hasError : false, comment : ''};
    if(emptyEmail) emailValidation = {hasError : true, comment : 'Please add your email, thanks'};
    else if(invalidEmail) emailValidation = {hasError : true, comment : 'Please use valid email, thanks'};
  
    return (
      <>
        <SendResult/>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <CustomTextField
              error={nameValidation.hasError}
              helperText={nameValidation.comment}
              variant="outlined"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CustomTextField
              error={emailValidation.hasError}
              helperText={emailValidation.comment}
              variant="outlined"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              error={errorInfo.subjectIsEmpty}
              helperText={errorInfo.subjectIsEmpty && 'Please add subject, thanks'}
              variant="outlined"
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              error={errorInfo.messageIsEmpty}
              helperText={errorInfo.messageIsEmpty && 'Please add message, thanks'}
              label="Message"
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
  
          <Grid item>
            <LoadingButton
              loading={sending}
              sx={{ padding: "10px 40px" }}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSendMessage}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                Send Message
              </Typography>
            </LoadingButton>
          </Grid>
        </Grid>
      </>
    );
};

export default Form;