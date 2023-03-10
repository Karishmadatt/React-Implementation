import Profilecard from "./Profilecard";

function App(){
    return(
    <div>
        <div>Personal Digital Assistants</div>

        <Profilecard title = 'Alexa' handle = '@alexa99'/>
        <Profilecard title = 'Cortana' handle = '@cortana32'/>
        <Profilecard title = 'Siri' handle = '@siri01'/>
    </div>
    )
}

export default App;