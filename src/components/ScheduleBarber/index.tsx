import { useState } from 'react'
import { Calendar } from '../ui/calendar'

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    background-color: black;
    color: white;
  }
  .my-today { 
    font-weight: bold;
    background-color: #000000da;
    color: white;
  }
`

const ScheduleBarber = () => {
  const [date, setDate] = useState<Date>()
  return (
    <>
      <style>{css}</style>
      <div className="pb-[16px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today',
          }}
        />
      </div>
    </>
  )
}

export default ScheduleBarber
