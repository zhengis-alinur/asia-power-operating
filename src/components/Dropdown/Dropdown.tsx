import Link from "next/link";
import "./styles.css";
import ArrowIcon from "@/icons/ArrowIcon";

export type Item = {
  label: string;
  href?: string;
  items?: Item[];
};

const Dropdown = ({ item }: { item: Item }) => {
  return (
    <div className="dropdown group inline-block">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="outline-none focus:outline-none px-3 py-1  rounded-sm flex items-center min-w-32"
      >
        <Link href={item.href || ""}>
          <span className="pr-1 flex-1">{item.label}</span>
        </Link>
        {item.items && (
          <span>
            <ArrowIcon />
          </span>
        )}
      </button>
      <ul
        id="menu"
        aria-hidden="true"
        className="bg-slate-800 rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 z-10"
      >
        {item.items?.map((subItem) =>
          subItem.items ? (
            <li
              key={subItem.label}
              className="rounded-sm relative px-3 py-1 hover:bg-slate-950"
            >
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <Link href={subItem.href || ""} className="pr-1 flex-1">
                  {subItem.label}
                </Link>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-slate-800 rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
              >
                {subItem.items.map((item) => (
                  <li
                    className="rounded-sm relative px-3 py-1 hover:bg-slate-950 w-48 cursor-pointer "
                    key={item.label}
                  >
                    <Link href={item.href || ""} className="pr-1 flex-1">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              className="rounded-sm relative px-3 py-1 hover:bg-slate-950 cursor-pointer"
              key={subItem.label}
            >
              <Link href={subItem.href || ""}>{subItem.label}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
