"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown, { Item } from "./Dropdown/Dropdown";
import MobileNav from "./MobileNav/MobileNav";
import Logo from "./Logo";
import { Category } from "@/types/Products";
import { PATHS } from "@/routes";
import { categoryMapping } from "@/data/categories";
import useClickOutside from "@/hooks/useClickOutside";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const navConfig: Item[] = [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Решения",
      href: "",
      items: [
        {
          label: "Жилой сектор",
          items: [
            {
              label: "Жилые комплексы",
              href: `${PATHS.solutions}/1`,
            },
            {
              label: "Частные дома",
              href: `${PATHS.solutions}/2`,
            },
          ],
        },
        {
          label: "Гражданское строительство",
          items: [
            {
              label: "Медицинские учреждения",
              href: `${PATHS.solutions}/3`,
            },
            {
              label: "Спортивные учреждения",
              href: `${PATHS.solutions}/4`,
            },
            {
              label: "Образование",
              href: `${PATHS.solutions}/5`,
            },
          ],
        },
        {
          label: "Коммерческие здания",
          items: [
            {
              label: "Гостиницы",
              href: `${PATHS.solutions}/6`,
            },
            {
              label: "Торговые центры",
              href: `${PATHS.solutions}/7`,
            },
            {
              label: "Бизнес центры и Административные здания",
              href: `${PATHS.solutions}/8`,
            },
          ],
        },
      ],
    },
    {
      label: "Продукция",
      href: `${PATHS.catalog}`,
      items: [
        {
          label: categoryMapping[Category.CableAndWireProducts],
          href: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
        },
        {
          label: categoryMapping[Category.LowVoltageEquipment],
          href: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
        },
        {
          label: categoryMapping[Category.ElectricalMountingProducts],
          href: `${PATHS.catalog}/${Category.ElectricalMountingProducts}`,
        },
        {
          label: categoryMapping[Category.ElectricalInstallationProducts],
          href: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
        },
        {
          label: categoryMapping[Category.LightingProducts],
          href: `${PATHS.catalog}/${Category.LightingProducts}`,
        },
        {
          label: categoryMapping[Category.CableLayingSystems],
          href: `${PATHS.catalog}/${Category.CableLayingSystems}`,
        },
        {
          label: categoryMapping[Category.MeteringAndControlDevices],
          href: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
        },
        {
          label: categoryMapping[Category.ToolsAndProtectiveEquipment],
          href: `${PATHS.catalog}/${Category.ToolsAndProtectiveEquipment}`,
        },
        {
          label: categoryMapping[Category.Cabinets],
          href: `${PATHS.catalog}/${Category.Cabinets}`,
        },
      ],
    },
    {
      label: "Контакты",
      href: PATHS.contacts,
    },
  ];

  return (
    <div
      ref={ref}
      className={`fixed w-full bg-foreground text-white z-10 transition-all`}
    >
      <Container className="flex items-center relative">
        <Logo />
        <nav className="justify-between hidden sm:flex p-2 ">
          {navConfig.map((item) => (
            <Dropdown key={item.label} item={item} />
          ))}
        </nav>
        <span
          className="absolute right-5 top-5 block sm:hidden text-2xl z-10 text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </span>
        {open && <MobileNav config={navConfig} />}
      </Container>
    </div>
  );
};

export default Header;
