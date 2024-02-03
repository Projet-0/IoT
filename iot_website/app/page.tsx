"use client"

import { useEffect, useState } from "react"

const Home = () => {

  const [userInfo, setUserInfo] = useState([])
  useEffect(()=>{
    const getData = async () => {
      const query = await fetch('https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2019-1010218')
      const response = await query.json(); 
      console.log('Response from API',response)
      setUserInfo(response)
    }
    getData(); 
  },[]);

  return (
    <>
      <div>page test</div>
      <p>
        {userInfo.format}
        {/* {userInfo.vulnerabilities.cveId} */}
      </p>
    </>
  )
}

export default Home