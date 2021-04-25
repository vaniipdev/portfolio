import React from 'react'
import {Helmet} from "react-helmet";

const Helment = ({title}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://www.vaniip.com" />
  </Helmet>
  )
}

export default Helment
