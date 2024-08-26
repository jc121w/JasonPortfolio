import React from "react";

export const School = () => {
  const UMD = "/assets/umd.png";
  return (
    <div className="border-[#1B263B]  border p-5 flex items-center px-5 rounded-lg prose mt-5">
      <img className="w-auto h-40" src={UMD} alt="umd_logo" />
      <ul>
        <div className="font-semibold text-lg">
          Bachelor of Computer Science
        </div>
        <div className="font-semibold">University of Maryland College Park</div>

        <ul>
          <li>Graduated May 2024</li>
          <li>GPA: 3.48 / 4</li>
          <li>Computer Science Major</li>
          <li>Business Minor</li>
        </ul>
      </ul>
    </div>
  );
};
