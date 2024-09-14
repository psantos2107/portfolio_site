"use client";
import Dropdown from "react-bootstrap/Dropdown";
import { FaBars } from "react-icons/fa";
import BootstrapClient from "./BootstrapClient";

const DropDownComponent = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle text-blue-950 bg-green-200 hover:bg-blue-950 hover:text-green-200  active:bg-blue-950 active:text-green-200">
          <FaBars size={16} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#intro-section">Home</Dropdown.Item>
          <Dropdown.Item href="#skills-section">Skills</Dropdown.Item>
          <Dropdown.Item href="#about-section">About</Dropdown.Item>
          <Dropdown.Item href="#projects-section">Projects</Dropdown.Item>
          <Dropdown.Item
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Dropdown.Item>
          <Dropdown.Item href="#contact-section">About</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <BootstrapClient />
    </>
  );
};

export default DropDownComponent;
