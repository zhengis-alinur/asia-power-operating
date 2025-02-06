import React from "react";
import "./styles.css";
import { Item } from "../Dropdown/Dropdown";
import Link from "next/link";
import ArrowIcon from "@/icons/ArrowIcon";

const MobileNav = ({ config }: { config: Item[] }) => {
  return (
    <nav className="absolute top-0 mobile-nav flex flex-col sm:hidden w-full bg-foreground p-10">
      <ul className="flex flex-col gap-4">
        {config.map((item) => (
          <li className="flex flex-col" key={item.label}>
            <Link className="flex items-center" href={item.href || ""}>
              {item.label}
              {item.items && (
                <span>
                  <ArrowIcon />
                </span>
              )}
            </Link>
            {item.items && (
              <ul className="flex flex-col">
                {item.items.map((subItem) => (
                  <li key={subItem.label}>
                    <Link
                      className="flex items-center"
                      href={subItem.href || ""}
                    >
                      {subItem.label}
                      {subItem.items && (
                        <span>
                          <ArrowIcon />
                        </span>
                      )}
                    </Link>
                    {subItem.items && (
                      <ul className="flex flex-col">
                        {subItem.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link href={subItem.href || ""}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
