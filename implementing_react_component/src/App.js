import Profilecard from "./Profilecard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){
    return(
    <div>
        <div>Personal Digital Assistants</div>

        {/* <img src={AlexaImage} /> */}

        <Profilecard title = 'Alexa' handle = '@alexa99' image={AlexaImage}/>
        <Profilecard title = 'Cortana' handle = '@cortana32' image={CortanaImage}/>
        <Profilecard title = 'Siri' handle = '@siri01' image={SiriImage}/>
    </div>
    )
}

export default App;