import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import gmailLogo from "../assets/gmail.png";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

export function Home() {
  return (
    <>
      <div className="  h-[100vh] flex text-primary px-4 lg:flex-row flex-col-reverse md:items-start lg:items-center justify-center">
        <div className="flex flex-col lg:w-2/3 w-full">
          <div className=" pointer-events-none flex flex-row font-black md:text-[7em] sm:text-[5em] max-xs:text-[2em] lg:text-[10em]">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              H
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className=" text-secondary"
            >
              ,
            </motion.span>
          </div>
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className=" flex lg:flex-row flex-col gap-4"
            >
              <div className="pointer-events-none">
                <p className=" text-2xl max-xs:text-sm font-bold">— Jade Dareal R Agduma</p>
              </div>
              {/* Socials */}
              <div className=" flex items-center flex-row gap-2 text-sm">
                <div className=" cursor-pointer px-2 py-1 border border-primary rounded-lg hover:bg-red-100 ease-in duration-100 transition-all">
                  <a href="mailto:agdumajade123@gmail.com" target="_blank">
                    <img
                      src={gmailLogo}
                      alt="gmail Logo"
                      className=" w-[16px]"
                    />
                  </a>
                </div>

                <div className=" cursor-pointer px-2 py-1 border border-primary rounded-lg hover:bg-blue-100 ease-in duration-100 transition-all">
                  <a
                    href="https://www.linkedin.com/in/jade-dareal-agduma-510a5a284/"
                    target="_blank"
                  >
                    <img
                      src={linkedinLogo}
                      alt="linked in Logo"
                      className=" w-[16px] "
                    />
                  </a>
                </div>

                <div className=" cursor-pointer px-2 py-1 border hover:bg-purple-100 ease-in duration-100 transition-all border-primary rounded-lg">
                  <a href="https://github.com/darealZoid" target="_blank">
                    <img
                      src={githubLogo}
                      alt="github Logo"
                      className=" w-[16px] "
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className=" pointer-events-none"
            >
              <p className=" font-bold max-xs:text-sm text-secondary">
                IT Graduate 2025 • Tech Savvy • Fast Learner
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className=" flex items-center justify-center md:w-full max-xs:w-full sm:w-1/3 lg:w-2/3"
        >
          <img
            src={profile}
            alt="profile"
            className="border shadow-lg max-sm:w-2/3 hover:shadow-2xl duration-200 ease-in-out transition-all rounded-lg lg:w-full md:w-1/2 lg:rounded-full border-primary"
          />
        </motion.div>
      </div>
      <div className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 animate-bounce">
        <p className=" font-black text-secondary">⬇ Scroll Down ⬇</p>
      </div>
    </>
  );
}
