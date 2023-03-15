function App (){
         const handleclick=()=>{
              console.log('Button was Clicked!')
         };

    return (<div>
              <button onClick={handleclick}>Add Animal</button>
         </div>
);}

export default App;