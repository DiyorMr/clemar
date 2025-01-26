import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState("uz");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <span className="relative">
      <span
        className="cursor-pointer w-12 flex items-center justify-between"
        onClick={() => setIsOpen(true)}
      >
        {lang === "uz" ? "Uzb" : "Рус"}
        <ChevronDown className="size-4 mt-1" />
      </span>
      {isOpen && (
        <span className="absolute -bottom-19 right-0 bg-[#06a6c3] rounded-lg p-1 flex flex-col gap-1">
          <span
            onClick={() => {
              setLang("uz");
              setIsOpen(false);
            }}
            className={`rounded-lg py-0 px-3 text-white hover:bg-[#0B8297] cursor-pointer ${
              lang === "uz" ? "bg-[#0B8297]" : "bg-transparent"
            }`}
          >
            Uzb
          </span>
          <span
            onClick={() => {
              setLang("ru");
              setIsOpen(false);
            }}
            className={`rounded-lg py-0 px-3 text-white hover:bg-[#0B8297] cursor-pointer ${
              lang === "ru" ? "bg-[#0B8297]" : "bg-transparent"
            }`}
          >
            Рус
          </span>
        </span>
      )}
    </span>
  );
};

export default LanguageSwitcher;
