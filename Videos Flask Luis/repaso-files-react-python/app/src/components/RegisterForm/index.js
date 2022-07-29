const RegisterForm = ({ handleSubmit, name, setName, email, setEmail, avatar, setAvatar }) => {
    return(
        <form onClick={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" className="form-control" placeholder="Insert Name" value={name} onChange={e => setName(e.target.value)}></input>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" className="form-control" placeholder="Insert Email" value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="name">Avatar:</label>
                <input type="file" name="name" className="form-control" placeholder="Select File" onChange={e => setAvatar(e.target.files[0])} ></input>
            </div>
            <div className="d.grid mb-3">
                <button className="btn btn-primary gap-2">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default RegisterForm