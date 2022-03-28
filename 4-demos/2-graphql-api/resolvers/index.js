import {readFile} from 'fs/promises';
let sessions = []

async function loadAllSessions() {
    sessions = JSON.parse(
        await readFile(
            new URL('../data/sessions.json', import.meta.url)
        )
    );
}
const promise = loadAllSessions();


const resolvers = {
    Query: {
        sessions: (parent, args, context, info) => {
            return sessions;
        },
        session_by_pk: (parent, args, context, info) => {
            let {id}=args
            const session=sessions.find(session=>session.id===parseInt(id))
            return session;
        }
    },
    Mutation:{
        add_one_session:(parent, args, context, info) => {
            let {sessionInput}=args;
            let session={
                id:Math.floor(Math.random()*1000),
                ...sessionInput
            }
            sessions.push(session)
            return session
        }
    }
}

export {resolvers}