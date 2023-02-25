import React from "react";
import { ContactSubmitProps } from "../types/types";

const ContactSubmit: React.FC<ContactSubmitProps> = ({ type, message }) => {
  switch (type) {
    case "info":
    case "success":
    case "error":
      return (
        <div className="relative inline-block pl-5">
          <div
            className={`${
              `alert alert-` +
              type +
              ` font-bold h-5 max-w-content justify-center`
            }`}
          >
            <label>{message}</label>
          </div>
        </div>
      );
    default:
      return undefined;
  }
};

export default ContactSubmit;
