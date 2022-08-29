import {webRTC_channel, loginName, groupsInfo} from "../js/global.js"
import Link from 'next/link'

function search() {
  console.log(loginName);
  console.log(groupsInfo);

  if (groupsInfo.length>0) {
    return (
      <>
        <div>
          <p>search</p>
          {
            groupsInfo?.map((item)=>{
              return (
              <Link href={`/room/${item.pid}`}>
                <button type="button" onClick={() => {
                  let offer = webRTC_channel.addLocalChannel()
                    .offerPeers()
                    .createOffer();
                  var tmp = {
                    state: "offer",
                    userName: loginName,
                    roomName: item.roomName,
                    data: offer
                  }
                  broadcastData(JSON.toStringfy(tmp));
                }}>
                  {item.roomName} room
                </button>
              </Link>);
            })
          }
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <p>search</p>
          <p>there are no rooms</p>
        </div>
      </>
    )
  }
}

export default search