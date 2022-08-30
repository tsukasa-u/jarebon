import {webRTC_channel, loginName, groupsInfo} from "../js/global.js"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function search() {
  console.log(loginName);
  console.log(groupsInfo);

  const router = useRouter();
  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {

      if (as !== '/select' && !as.match(/room/)) {
        window.location.href = "/error";
        return false;
      }

      return true;
    })
  }, []);
offer
  if (groupsInfo.length>0) {
    return (
      <>
        <div>
          <p>search</p>
          {
            groupsInfo?.map((item)=>{
              return (
              <Link href={`/room/${item.pid}`}>
                <button type="button" key={item.pid} onClick={() => {
                  let offer = new Promise((resolve, reject) => resolve(webRTC_channel.addLocalChannel()))
                  .then((ch) => new Promise((resolve, reject) => resolve(ch.offerPeers())))
                  .then((ch) => new Promise((resolve, reject) => resolve(ch.createOffer())))
                  .catch((err) => console.log(err));
                  // let offer = webRTC_channel.addLocalChannel()
                  //   .offerPeers()
                  //   .createOffer();
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