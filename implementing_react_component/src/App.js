import 'bulma/css/bulma.css';
import Profilecard from "./Profilecard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App(){
    return(
    <div>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>
                Personal Digital Assistants
                </p>
            </div>
        </section>

        {/* <img src={AlexaImage} /> */}
        <div className='container'>
            <section className='section'>
                <div className='columns'>
                    <div className='column is-3'>
                      <Profilecard 
                      title = 'Alexa' 
                      handle = '@alexa99'
                      image={AlexaImage}
                      description='Alexa was created by Amazon and is used to buy things.'
                      />
                    </div>
                    <div className='column is-3'>
                      <Profilecard 
                      title = 'Cortana' 
                      handle = '@cortana32' 
                      image={CortanaImage}
                      description='Cortana was made by Microsoft. Who knows what is does?'
                      />
                    </div>
                    <div className='column is-3'>
                      <Profilecard 
                      title = 'Siri' 
                      handle = '@siri01' 
                      image={SiriImage}
                      description='Siri is made by Apple and is being phase out.'
                      /> 
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default App;