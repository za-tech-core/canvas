import ReactDOM from 'react-dom'
import './src/style/index.css'



const app = (El) => {
    ReactDOM.render(<El></El>, document.getElementById("app"))
}
const hello = () => {

    console.log("hello world damn")
}

const bye = () => { 
    console.log("bye bye")
}

export default {hello,bye,app};