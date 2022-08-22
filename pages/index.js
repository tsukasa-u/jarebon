import Link from 'next/link'
import { BroadcastChannel } from 'broadcast-channel';
import Head from 'next/head';
import Script from 'next/script'
import { useRouter } from 'next/router';

// Connect to the channel named "my_bus".
const channel = new BroadcastChannel('my_bus');

// Listen for messages on "my_bus".

channel.onmessage = function(e) {
  const json_data = JSON.parse(e);
  // console.log('Received', e, "gg");
};

// Close the channel when you're done.
// channel.close();

const Index = () => {

  const router = useRouter();

  const loginClick = e => {
    e.preventDefault();
    
    // Send a message on "my_bus".
    let loginName = document.getElementById("loginForm").value;
    if (loginName) {
      var loginData = {
        "userName": loginName,
        "state": "enter"
      }
      channel.postMessage(JSON.stringify(loginData));
  
      // console.log(JSON.stringify(loginData));
      router.push("/room");
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