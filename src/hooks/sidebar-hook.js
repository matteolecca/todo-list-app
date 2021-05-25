import EventIcon from '@material-ui/icons/Event';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useCallback, useReducer } from 'react';
const sidebarItems = {
    main: [
        { id: 0, title: 'today', icon: EventIcon, color: '#b5e550', today : true },
        { id: 1, title: 'scheduled', icon: DateRangeIcon, color: '#2a9df4', scheduled : true },
        { id: 2, title: 'important', icon: LabelImportantIcon, color: '#ba0000', important : true },
    ],
    projects: [
        {
            title: 'work',
            todos: [
                { title: 'front-end', color: '#ba0000' },
                { title: 'back-end', color: '#fb6d4c' },
            ]
        },
        {
            title: 'altro',
            todos: [
                { title: 'spesa', color: '#b5e550' },
            ]
        },
    ]
}
const reducer = (state = sidebarItems, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const projectsCopy = [ ...state.projects]
            projectsCopy.push({title : action.title, todos : []})
            return {...state, projects : projectsCopy}
        default:
            return state
    }
}

const SideBarHook = () => {
    const [state, dispatch] = useReducer(reducer, sidebarItems)
    const addProject = useCallback((title)=>{
        dispatch({type : 'ADD_TODO', title : title })
    },[])
    return {
        sidebarItems: state,
        addProject : addProject
    }
}

export default SideBarHook