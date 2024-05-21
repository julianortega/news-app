'use client'

import { useRouter } from 'next/navigation'

type Props = {
  id: string
}

function ReadMoreButton({ id }: Props) {
  const router = useRouter()

  const handleClick = () => {
    const url = `/article/${id}`
    router.push(url)
  }

  return (
    <button
      onClick={handleClick}
      className='bg-cyan-500 h-10 rounded-b-lg dark:text-gray-900 hover:bg-cyan-600'
    >
      Read More
    </button>
  )

}

export default ReadMoreButton