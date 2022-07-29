import RegisterForm from "./components/RegisterForm";
import { useState } from "react";

const App = () => {

    const [name, setName] =useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('sin-foto.png');

    const handleSubmit = async e => {
        e.preventDefault();

        const formData=new formData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('avatar', avatar);

        const info = await registerFetch(formData);
        console.log(info);
    }

    const registerFetch = async data => {
        const resp = await fetch('http://127.0.0.1:5000/api/register', {method : 'POST', body: data})
        const info = await resp.json
        return info;
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <RegisterForm handleSubmit={handleSubmit} name={name} email={email} avatar={avatar} setName={setName} setEmail={setEmail} setAvatar={setAvatar} />
                </div>
            </div>
        </div>
    )
}
export default App;