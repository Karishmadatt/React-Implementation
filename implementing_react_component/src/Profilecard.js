function Profilecard({title,handle,image,description}){//using argument destructuring directly instead of writing props
    // const {title,handle} = props //using argument destructuring
    return (
        <div className="card">
            <div  className="card-image">
            <figure className="image is-1by1">
              <img src={image} />
            </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">Title is {title}</p>
                    <p className="subtitle is-6">Handle is {handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    )
}

export default Profilecard;