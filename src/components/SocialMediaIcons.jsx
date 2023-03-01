import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'


const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
      className="hover:opacity-50 transition duration-500"
      href="https://www.linkedin.com/in/hugo-aguiar-a25839245/"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>

      <a
      className="hover:opacity-50 transition duration-500"
      href="https://github.com/aguiarHugo"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillGithub />
      </a>

      <a
      className="hover:opacity-50 transition duration-500"
      href="https://www.linkedin.com/in/hugo-aguiar-a25839245/"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
    </div>
  )
}

export default SocialMediaIcons