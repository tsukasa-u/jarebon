import Link from 'next/link'
import {loginName} from "../js/global.js"

function select() {
  return (
    <>
      <div>
        <p>username : {loginName}</p>
        <Link href="/search">
          <button type="button">search room</button>
        </Link>
        
        {/* <Link href="/room/1"> */}
        <Link href="/create">
          <button type="button">create room</button>
        </Link>
      </div>
    </>
  )
}

export default select;