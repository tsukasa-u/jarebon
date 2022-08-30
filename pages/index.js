import Link from 'next/link'
import { BroadcastChannel } from 'broadcast-channel'
import Head from 'next/head'
import Script from 'next/script'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { loginName, setLoginName, savedHashedPid, setSavedHashedPid} from "../js/global.js"
import { broadcastData} from "../js/broadcast.js"
import React, { useState, useEffect } from 'react'
import { BrowserFingerprint } from "browser_fingerprint"
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
      

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// channel.close();

const Index = () => {

  const router = useRouter();

  const options = {
    cookieKey: "__browser_fingerprint",
    toSetCookie: true,
    onlyStaticElements: true,
    settings: {
      path: "/",
      expires: 3600000,
      httpOnly: null,
    },
  };

  const [fingerPrinter, setfingerPrinter] = useState('')
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setfingerPrinter(new BrowserFingerprint(options)), [])
  
  // const fingerPrinter = new BrowserFingerprint(options);

  const loginClick = e => {
    e.preventDefault();
    
    setLoginName(document.getElementById("loginForm").value);
    console.log(loginName);

    setSavedHashedPid(fingerPrinter.savedHashedPid);
    // console.log(fingerPrinter.savedHashedPid);

    if (loginName) {
      var loginData = {
        "userName": loginName,
        "state": "enter"
      }
      broadcastData(JSON.stringify(loginData));
      // console.log(JSON.stringify(loginData));
      router.push("/select");
    }
  };

  return (
    <>
      <Head>
        <title>
          Login
        </title>
      </Head>
      {/* <Script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/js/foundation.min.js"/> */}
      <div>Login Page</div>
      <form>
        <input id="loginForm"></input>
        <button type='button' onClick={loginClick}>
          LOGIN
        </button>
      </form>
      <div>{`ID:${fingerPrinter.savedHashedPid}`}</div>
    </>
  )
}

export default Index