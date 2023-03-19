import { StudentDetail } from '@/components/swr'
import { useState } from 'react'

export default function SWRPage() {
  const [detailList, setDetailList] = useState([1, 1, 1])
  function handleAddClick() {
    setDetailList((previousList) => [...previousList, 1])
  }
  return (
    <div>
      <h1>SWR Page</h1>
      <button onClick={handleAddClick}>Add Detail</button>
      <ul>
        {detailList.map((x, index) => (
          <li key={index}>
            <StudentDetail userId="kem1" />
          </li>
        ))}
      </ul>
    </div>
  )
}
