import Link from 'next/link'
import {loginName} from "../../js/global.js"

import { useRouter } from 'next/router';

const room = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  return <p>Post: {id}</p>;
};

export default room;