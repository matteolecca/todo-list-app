import moment from 'moment'

export const  getCompletionPercentage = task =>{
       const diffStartEnd = (moment(task.end_date).diff(moment(task.start_date), 'day') )
       const diffTodayEnd = (moment().diff(moment(task.start_date), 'day') )
       if(diffStartEnd === 0 && diffTodayEnd === 0) return 0
       let percentage = diffTodayEnd / diffStartEnd *  100
       return percentage
}