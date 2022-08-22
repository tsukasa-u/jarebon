import Link from 'next/link'

function room() {
  return (
    <>
      <div>
        <Link href="/search">
          <button type="button">search room</button>
        </Link>
        
        <Link href="/create">
          <button type="button">create room</button>
        </Link>
      </div>
    </>
  )
}

export default room