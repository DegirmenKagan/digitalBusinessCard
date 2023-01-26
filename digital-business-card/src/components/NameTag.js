import React from "react";
import mail from "./../assets/mail.png";
import linkedIn from "./../assets/linkedIn.png";

export default function NameTag() {
  return (
    <div className="nameTag">
      <h6 className="nameTag--name">Name Surname</h6>
      <h6 className="nameTag--profession">Profession</h6>
      <h6 className="nameTag--website">Website</h6>
      <div className="nameTag--buttonField">
        <button
          className="nameTag--buttonEmail"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:no-reply@example.com";
          }}
        >
          <img src={mail} />
          Email
        </button>
        <button
          className="nameTag--buttonLinkedIn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/");
          }}
        >
          <img src={linkedIn} />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
