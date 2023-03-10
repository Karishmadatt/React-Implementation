function Profilecard({title,handle,image}){//using argument destructuring directly instead of writing props
    // const {title,handle} = props //using argument destructuring
    return (
        <div>
            <img src={image} />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default Profilecard;