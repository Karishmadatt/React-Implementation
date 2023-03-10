function Profilecard({title,handle}){//using argument destructuring directly instead of writing props
    // const {title,handle} = props //using argument destructuring
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default Profilecard;