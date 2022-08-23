import {loginName, setGroupInfo, savedHashedPid} from "../js/global.js"
import { useRouter } from 'next/router';

function create() {
  console.log(loginName);

  const router = useRouter();
  
  const createClick = e => {
    e.preventDefault();
    
    var tmp = {
      roomName: document.getElementById("createForm").value,
      member: [loginName],
      main: loginName,
      pid: savedHashedPid
    };
    setGroupInfo(tmp);
    // console.log(tmp);
    // console.log(`/room/${tmp.pid}`);
    router.push(`/room/${tmp.pid}`);
  };

  return (
    <>
      <div>
        <p>create</p>
        <form>
          <input id="createForm"></input>
          <button type='button' onClick={createClick}>
            create
          </button>
        </form>
      </div>
    </>
  )
}

export default create