import Provider from "./provider";
import Main from "./routes/main";

export default function MyNotepad()
{
    return(
        <Provider>
            <Main />
        </Provider>
    )
}