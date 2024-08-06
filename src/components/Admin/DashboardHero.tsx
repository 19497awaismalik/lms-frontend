import React,{useState,FC} from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardWidgets from './Widgets/DashboardWidgets';
interface Props{
    isDashboard?:boolean
}
const DashboardHero:FC<Props> = ({isDashboard}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
        <DashboardHeader open={open} setOpen={setOpen}/>
        {isDashboard && (
          <>
          <DashboardWidgets open={open}/>
          
          </>
        )}

    </div>
  )
}

export default DashboardHero