import Link from 'next/link'
import { BroadcastChannel } from 'broadcast-channel';
import Head from 'next/head';
import Script from 'next/script'
import { useRouter } from 'next/router';

// Connect to the channel named "my_bus".
const channel = new BroadcastChannel('my_bus');

// Listen for messages on "my_bus".
channel.onmessage = function(e) {
  console.log('Received', e, "gg");
};

const Index = () => {

// Send a message on "my_bus".
channel.postMessage('This is a test message.');


// Close the channel when you're done.
// channel.close();
  const router = useRouter();

  const loginClick = e => {
    e.preventDefault();
    console.log("login");
    router.push("/room");
  };

  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css" crossorigin="anonymous"></link> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/js/foundation.min.js" crossorigin="anonymous"></script> */}
      </Head>
      {/* <Script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/js/foundation.min.js"/> */}
      <div>Login Page</div>
      <form>
        <input></input>
        <button type='button' onClick={loginClick}>
          LOGIN
        </button>
      </form>
    </>
  )
}

export default Index