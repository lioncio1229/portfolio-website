import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';

const useSendEmail = (service_id, template_id, public_key, onSuccess=null, onFailed=null) => {
    const [msg, setMsg] = useState(null);
    const [sending, setSending] = useState(false);

    const send = (message) => {
        setSending(true);
        setMsg(message)
    }

    useEffect(() => {
        if(!sending) return;

        emailjs.send(service_id, template_id, msg, public_key)
        .then(res => {
            setSending(false);
            if(onSuccess) onSuccess();
        }, (err) => {
            setSending(false);
            if(onFailed)onFailed();
        });

    }, [sending]);

    return {send, sending};
}
 
export default useSendEmail;