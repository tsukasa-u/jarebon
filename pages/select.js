import Link from 'next/link'
import {loginName} from "../js/global.js"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function select() {

  const router = useRouter();
  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {

      if (as !== '/search' && as !== '/create' && as !== '/') {
        window.location.href = "/error";
        return false;
      }

      return true;
    })
  }, []);

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