import React,{useState} from 'react';



export default (props) =>{
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    return(
        <div className="form">
            <form className="newMemberForm" onSubmit={event => {
                event.preventDefault();
                props.addTeamMember(member);
                setMember({
                    name: "",
                    email: "",
                    role: ""
                });
            }}>
                <label htmlFor="newName">Name:</label>
                <input type="text" name="name" id="newName" onChange={event => {
                    setMember({...member, name: event.target.value});
                }} value={member.name}/>
                <label htmlFor="newEmail">Email:</label>
                <input type="email" name="email" id="newEmail" onChange={event => {
                    setMember({...member, email: event.target.value});
                }} value={member.email}/>
                <label htmlFor="newRole">Role:</label>
                <input type="text" name="role" id="newRole" onChange={event => {
                    setMember({...member, role: event.target.value});
                }} value={member.role}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}