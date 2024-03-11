import './style.css'
import style from './custom.module.css'
import { Button } from 'react-bootstrap'

function DiffStyles() {
    return (
        <>
            <h1 className="style">style example</h1>
            <h1 style={{ color: 'red', backgroundColor: "black" }}>Inline style example</h1>
            <h1 className={style.success}>Custom style example</h1>
            <h3>Bootstrap Example</h3>
            <Button> Click Me</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </>
    )
}
export default DiffStyles