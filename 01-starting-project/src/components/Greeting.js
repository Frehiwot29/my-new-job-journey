import { useState } from 'react'
import OutPut from './OutPut';
const Greeting = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true)
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changeText && <OutPut>good to see you</OutPut>}
            {changeText && <OutPut> Changed! </OutPut>}
            <button onClick={changeTextHandler}>ChangeText</button>
        </div>
    )
}
export default Greeting
