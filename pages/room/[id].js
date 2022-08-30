import Link from 'next/link'
import {loginName} from "../../js/global.js"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const room = () => {
  const router = useRouter();
  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {

      if (as !== '/select' && as !== '/create') {
        window.location.href = "/error";
        return false;
      }

      return true;
    })
  }, []);

  const { id } = router.query;
  console.log(router.query);

  return <p>Post: {id}</p>;
};

export default room;