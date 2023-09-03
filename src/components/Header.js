"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  console.log(themeMode, "themeMode");

  return (
    <div className="bg-stone-700 dark:bg-slate-800 h-48">
      <div className="h-full flex justify-end items-center mr-10">
        {mounted &&
        (themeMode === "dark" ? (
          <MdLightMode onClick={()=>setTheme("light")} className="cursor-pointer" size={30} />
        ) : (
          <MdDarkMode onClick={()=>setTheme("dark")} className="cursor-pointer" size={30} />
        ))}
      </div>
    </div>
  );
};

export default Header;
