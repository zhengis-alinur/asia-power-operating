import React from "react";
import "./styles.css";
import Link from "next/link";
import ArrowIcon from "@/icons/ArrowIcon";

export interface Item {
  label: string;
  href?: string;
  items?: Item[];
}

type DropdownProps = {
  item: Item;
};

const Dropdown: React.FC<DropdownProps> = ({ item }) => {
  return (
    <li className="dropdown">
      <Link href={item.href || ""} className="dropdown-root">
        {item.label} {item.items && <ArrowIcon />}
      </Link>
      <ul className="root">
        {item.items?.map((subItem) => (
          <li key={subItem.label} className="parent">
            <Link href={subItem.href || ""}>
              {subItem.label} {subItem.items && <ArrowIcon />}
            </Link>
            <ul className="child">
              {subItem.items?.map((subsubItem) => (
                <li className="parent" key={subsubItem.label}>
                  <Link href={subsubItem.href || ""}>
                    {subsubItem.label} {subsubItem.items && <ArrowIcon />}
                  </Link>
                  <ul className="child">
                    {subsubItem.items?.map((subsubsubItem) => (
                      <li className="parent" key={subsubsubItem.label}>
                        <Link href={subsubsubItem.href || ""}>
                          {subsubsubItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
