import { useSelector } from "react-redux";

const UserData = () => {
    const user = useSelector(state => state.user)

    return (
        <>
            {user.username ? 
                <div>
                    <h1>Datos de usuario</h1>
                    <ul>
                        <li><img src={user.image} alt={user.name} width={275}/></li>
                        <li>{user.name ? <h2>Nombre: {user.name}</h2> : ''}</li>
                        <li>Usuario: {user.username}</li>
                        <li>Repositorios: {user.repositories}</li>
                        <li>Seguidores: {user.followers}</li>
                        
                    </ul>
                </div>
                :
                <h2>Busca un usuario de GitHub</h2>
            }
        </>
    )
}

export default UserData;