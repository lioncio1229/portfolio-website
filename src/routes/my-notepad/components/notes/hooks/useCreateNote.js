import useStore from "../../../useStore";
import axios from 'axios';
import { notes_url } from "../../../utils";

export default function useCreateNote()
{
    const {dispatch, state} = useStore();
    const newNote = {
        title : 'New Note',
        content : '',
        isFresh : true
    }
    const create = () => {
        axios.post(notes_url, newNote).then(result => {
            if(result.status === 200)
                dispatch({type : 'notes/add', payload : result.data});
        });
    }
    return create;
}