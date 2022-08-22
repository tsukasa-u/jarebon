import Link from 'next/link'
import { BroadcastChannel } from 'broadcast-channel';
import Head from 'next/head';
import Script from 'next/script'
import { useRouter } from 'next/router';
import {loginName} from"../js/global.js"
import {broadcastData} from "../js/broadcast.js"
import React, { useState, useEffect } from 'react';

// channel.close();

const Index = () => {

  const router = useRouter();

  const loginClick = e => {
    e.preventDefault();
    
    loginName  = document.getElementById("loginForm").value;
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
    </>
  )
}

export default Index