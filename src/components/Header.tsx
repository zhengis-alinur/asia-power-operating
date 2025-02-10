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

const getCategoryNav = (categories: Category[]) =>
  categories.map((category) => ({
    label: categoryMapping[category],
    href: `${PATHS.catalog}/${category}`,
  }));

export const navConfig: Item[] = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Решения",
    href: "/solutions",
    items: [
      {
        label: "Жилой сектор",
        items: [
          {
            label: "Жилые комплексы",
            href: `${PATHS.solution}/1`,
            items: getCategoryNav([
              Category.LowVoltageEquipment,
              Category.CableAndWireProducts,
              Category.ElectricalInstallationProducts,
              Category.LightingProducts,
              Category.MeteringAndControlDevices,
              Category.VideoSurveillance,
              Category.AccessControlAndManagementSystem,
              Category.AutomaticFireAlarm,
            ]),
          },
          {
            label: "Частные дома",
            href: `${PATHS.solution}/2`,
            items: getCategoryNav([
              Category.LightingProducts,
              Category.LowVoltageEquipment,
              Category.ElectricalInstallationProducts,
              Category.MeteringAndControlDevices,
              Category.VideoSurveillance,
              Category.AccessControlAndManagementSystem,
              Category.AutomaticFireAlarm,
            ]),
          },
        ],
      },
      {
        label: "Гражданское строительство",
        items: [
          {
            label: "Медицинские учреждения",
            href: `${PATHS.solution}/3`,
            items: getCategoryNav([
              Category.LightingProducts,
              Category.ElectricalInstallationProducts,
              Category.LowVoltageEquipment,
              Category.MeteringAndControlDevices,
              Category.CableAndWireProducts,
              Category.AccessControlAndManagementSystem,
              Category.AutomaticFireAlarm,
              Category.UninterruptiblePowerSupplies,
              Category.VideoSurveillance,
            ]),
          },
          {
            label: "Спортивные учреждения",
            href: `${PATHS.solution}/4`,
            items: getCategoryNav([
              Category.LightingProducts,
              Category.LowVoltageEquipment,
              Category.ElectricalInstallationProducts,
              Category.MeteringAndControlDevices,
              Category.CableAndWireProducts,
              Category.VideoSurveillance,
              Category.AccessControlAndManagementSystem,
              Category.AutomaticFireAlarm,
            ]),
          },
          {
            label: "Образование",
            href: `${PATHS.solution}/5`,
            items: getCategoryNav([
              Category.LightingProducts,
              Category.ElectricalInstallationProducts,
              Category.LowVoltageEquipment,
              Category.MeteringAndControlDevices,
              Category.Cabinets,
              Category.CableAndWireProducts,
              Category.VideoSurveillance,
              Category.AccessControlAndManagementSystem,
              Category.AutomaticFireAlarm,
            ]),
          },
        ],
      },
      {
        label: "Коммерческие здания",
        items: [
          {
            label: "Гостиницы",
            href: `${PATHS.solution}/6`,
            items: getCategoryNav([
              Category.LightingProducts,
              Category.LowVoltageEquipment,
              Category.ElectricalInstallationProducts,
              Category.CableLayingSystems,
              Category.CableAndWireProducts,
              Category.MeteringAndControlDevices,
              Category.UninterruptiblePowerSupplies,
              Category.VideoSurveillance,
              Category.AccessControlAndManagementSystem,
            ]),
          },
          {
            label: "Торговые центры",
            href: `${PATHS.solution}/7`,
            items: getCategoryNav([
              Category.LowVoltageEquipment,
              Category.LightingProducts,
              Category.MeteringAndControlDevices,
              Category.ElectricalInstallationProducts,
              Category.CableLayingSystems,
              Category.CableAndWireProducts,
              Category.VideoSurveillance,
              Category.AccessControlAndManagementSystem,
              Category.AutomaticFireAlarm,
            ]),
          },
          {
            label: "Бизнес центры и Административные здания",
            href: `${PATHS.solution}/8`,
            items: getCategoryNav([
              Category.LightingProducts,
              Category.LowVoltageEquipment,
              Category.MeteringAndControlDevices,
              Category.ElectricalInstallationProducts,
              Category.CableLayingSystems,
              Category.CableAndWireProducts,
              Category.UninterruptiblePowerSupplies,
              Category.VideoSurveillance,
              Category.AccessControlAndManagementSystem,
              Category.AutomaticFireAlarm,
            ]),
          },
        ],
      },
    ],
  },
  {
    label: "Продукция",
    href: PATHS.catalog,
    items: Object.values(Category).map((category) => ({
      label: categoryMapping[category],
      href: `${PATHS.catalog}/${category}`,
    })),
  },
  {
    label: "Контакты",
    href: PATHS.contacts,
  },
];

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

  return (
    <div
      ref={ref}
      className={`fixed w-full bg-foreground text-white z-10 transition-all`}
    >
      <Container className="flex items-center relative">
        <Logo />
        <nav className="justify-between hidden sm:flex p-2 gap-12">
          {navConfig.map((nav) => (
            <Dropdown key={nav.label} item={nav} />
          ))}
        </nav>
        <span
          className="absolute right-5 top-5 block sm:hidden text-2xl z-10 text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#FFFFFF"
              />
            </svg>
          ) : (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill="#FFFFFF"
                fillRule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
              />
            </svg>
          )}
        </span>
        {open && <MobileNav config={navConfig} />}
      </Container>
    </div>
  );
};

export default Header;
