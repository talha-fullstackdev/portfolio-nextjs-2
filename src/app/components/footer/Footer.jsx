import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const data = [
    {
      name:"github",
      icon :<FiGithub />,
      link:"https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07"
    },
    {
      name:"instagram",
      icon :<FaInstagram />,
      link:"https://www.instagram.com/"
    },
    {
      name:"twitter-X",
      icon :<SlSocialTwitter />,
      link:"https://x.com/?lang=en"
    },
    {
      name:"linkedin",
      icon :<FaLinkedin />,
      link:"https://www.linkedin.com/in/talha-nawaz-5421931a4/"
    },
    {
      name:"facebook",
      icon :<FaFacebook />,
      link:"https://www.facebook.com/"
    },
  ]
  return (
    <div>
      <p>Design & Built By Talha Nawaz</p>
       {data.map((item)=>(
        <div className="">
          <a title={item.name} href={item.link}>{item.icon}</a>
        </div>
       ))}
    </div>
  )
}

export default Footer