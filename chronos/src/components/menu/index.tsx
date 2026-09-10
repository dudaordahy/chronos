import {
  HistoryIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react";

import React, { useEffect, useState } from "react";

import style from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    // Recupera o tema salvo ou usa "dark" como padrão
    const storageTheme = localStorage.getItem("theme") as AvailableThemes;
    return storageTheme || "dark";
  });

  // Mapeia o tema atual para o ícone do próximo tema
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  }

  // Salva o tema no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={style.menu}>
      <a
        className={style.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <TimerIcon />
      </a>

      <a
        className={style.menuLink}
        href="#"
        aria-label="Ver histórico de tarefas"
        title="Ver histórico de tarefas"
      >
        <HistoryIcon />
      </a>

      <a
        className={style.menuLink}
        href="#"
        aria-label="Ver configurações"
        title="Ver configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={style.menuLink}
        href="#"
        onClick={handleThemeChange}
        aria-label="Alternar tema"
        title="Alternar tema"
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}