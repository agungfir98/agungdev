import React from 'react'
import fs from 'fs';
import path from 'path'
import { GetStaticPaths } from 'next';
import {useRouter} from 'next/router';

export default function Post() {
  const router = useRouter();
  const {slug} = router.query
  return (
    <div>Post: {slug}</div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {}
