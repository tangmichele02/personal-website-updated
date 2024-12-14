import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div>
      <h2 className="text-6xl">Hi, I'm Michele!</h2>
      <h3 className="text-4xl">
        I'm a Software Engineer, based in Washington State.
      </h3>
      <div className="flex flex-grow justify-center text-5xl">
        <a href="https://www.linkedin.com/in/michele-tang/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tangmichele02/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Profile;
