
import  {useQuery,gql} from  "@apollo/client";

const GET_SESSIONS = gql`
    query GetSessions {
        sessions {
            title
            track
        }
    }
`;

const SessionList=()=>{
    const { loading, error, data } = useQuery(GET_SESSIONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <ul>
                {data.sessions.map(session=>{
                    return (
                        <li className={"list-group-item"} key={session.id}>
                            <div className={"display-3"}>{session.title}</div>
                            <div className={"display-6"}>{session.track}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export  default  SessionList;