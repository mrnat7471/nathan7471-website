import Image from 'next/image'
import Link from "next/link";
import {faDiscord, faXTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Chip} from "@nextui-org/chip";

function calculateAge(dob: string) {
    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default function Home() {
  return (
    <main className={"background"}>
      <div className={"p-20"}>
          <div className={"bg-white box-height relative lg:flex lg:flex-row rounded-xl"}>
              <div className={"bg-white box-height-inner lg:absolute rounded-t-lg lg:rounded-xl lg:-top-5 lg:w-[40vw] flex flex-col justify-center content-center text-center"}>
                  <div className={"mt-auto"}>
                      <Image src={"/images/avatar.png"} alt={"Profile Image"} width={150} height={150} className={"rounded-full mx-auto mb-3"}/>
                      <h1 className={"text-3xl font-bold"}>Nathan Powell</h1>
                      <h3 className={""}>Pronouns: He/Him</h3>
                      <p className={"text-xl text-[#194CFF]"}>Full Stack Software Engineer</p>
                      <div className={"flex flex-row gap-3 text-center justify-center mt-2"}>
                          <Link href={"discord://-/users/510238066829688832"}><FontAwesomeIcon icon={faDiscord as IconProp} height="50" className="text-2xl" /></Link>
                          <Link href={"https://twitter.com/Natpow7471"}><FontAwesomeIcon icon={faXTwitter as IconProp} height="50" className="text-2xl" /></Link>
                          <Link href={"https://github.com/mrnat7471"}><FontAwesomeIcon icon={faGithub as IconProp} height="50" className="text-2xl" /></Link>
                      </div>
                  </div>
                  <div className={"mt-auto grid grid-cols-2"}>
                      <Link href={"/Nathan-Powell-CV.pdf"} target={"_blank"} className={"border-1 border-gray-200 lg:rounded-bl-xl"}>
                          <p className={"p-5"}>Download CV</p>
                      </Link>
                      <Link href={"mailto:contact@omnibyte.tech"} className={"border-t-1 border-b-1 border-r-1 border-gray-200 lg:rounded-br-xl"}>
                          <p className={"p-5"}>Contact Me</p>
                      </Link>
                  </div>
              </div>
              <div className={"lg:ml-[41vw] bg-white mt-5 rounded-xl"}>
                  <h2 className={"text-3xl font-bold underline text-black"}>About me</h2>
                  <h3>Hello Humans 👋</h3>
                  <p>As a passionate Full Stack Software Engineer, I bring a dynamic blend of cutting-edge technical
                      skills and a fresh, creative approach to software development. At just {calculateAge('2002-07-07')} years old, I have
                      already made significant strides in both front-end and back-end technologies. My journey in
                      coding began early, allowing me to develop a deep understanding of languages such as JavaScript,
                      TypeScript, and Python, along with frameworks like React and Node.js.<br/><br/>
                      My experience includes building responsive and user-friendly web applications, diving deep into
                      databases, and crafting efficient server-side algorithms. What sets me apart is my eagerness to
                      embrace new challenges and my commitment to staying on top of industry trends. My coding is not
                      just a profession; it’s a passion that drives me to create innovative solutions that resonate
                      with users.</p>
                  <div className={"text-lg mx-10 mt-5 grid-cols-2 grid"}>
                      <p><span className={"font-bold"}>AGE...</span> {calculateAge('2002-07-07')}</p>
                      <p><span className={"font-bold"}>RESIDENCE...</span> United Kingdom</p>
                      <p><span className={"font-bold"}>FREELANCE...</span> <Chip color="success">Available</Chip></p>
                      <p><span className={"font-bold"}>ADDRESS...</span> Leeds, England</p>
                  </div>
                  <div className={"grid grid-cols-2 mt-2 text-center border-t-1 pt-2 mr-3"}>
                      <p>🛠 Languages & technology:<br/>
                          - Python<br/>
                          - Javascript<br/>
                          - Typescript<br/>
                          - CSS<br/>
                          - HTML<br/>
                          - Vue<br/>
                      </p>
                      <p>🛠 Frameworks:<br/>
                          - Django<br/>
                          - React<br/>
                          - NuxtJS<br/>
                          - NextJS<br/>
                          - Electron<br/>
                          - Tauri
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </main>
  )
}
