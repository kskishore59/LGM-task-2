import './index.css'

const ListItem = (props) => {
    const {details} = props
    const {id, email, firstName, lastName, avatar} = details

    return (
        <div className="container">
        <li className="list-Item-cont">
            <img src = {avatar} className="image-avatar" alt={`avatar ${firstName}`}/>
            <p className="name">{firstName} {lastName}</p>
            <p className="email">{email}</p>
        </li>
        <div className="overlay">
                <div className="text">Know More</div>
        </div>
        </div>
    )


}

export default ListItem