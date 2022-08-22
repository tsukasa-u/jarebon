const Login = () => {
  const router = useRouter();

  const loginClick = e => {
    e.preventDefault();
    
    // Send a message on "my_bus".
    let loginName = document.getElementsById("loginForm");
    if (loginName != "") {
      var loginData = {
        "userName": loginName,
        "state": "enter"
      }
      channel.postMessage("");
  
      console.log("login");
      router.push("/room");
    }
  };

  return (
    <>
      <Head>
        <title>
          login
        </title>
      </Head>
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

export default Login