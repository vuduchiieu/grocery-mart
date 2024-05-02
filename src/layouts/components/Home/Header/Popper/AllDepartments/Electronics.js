import icon from "~/assets/icon";
import TvAndVideo from "./TvAndVideo";

import styles from "./AllDepartments.module.scss";
import classNames from "classnames/bind";
import WearableTechnology from "./WearableTechnology";
import Computers from "./Computers";
import Savings from "./Savings";
import CellPhones from "./CellPhones";
const cx = classNames.bind(styles);

const LIST_ElECTRONICS = [
  {
    title: "TV & Video",
    icon: icon.iconTv,
    children: <TvAndVideo />,
  },
  {
    title: "Wearable Technology",
    icon: icon.wearable,
    children: <WearableTechnology />,
  },
  {
    title: "Computers",
    icon: icon.computers,
    children: <Computers />,
  },
  {
    title: "Savings",
    icon: icon.savings,
    children: <Savings />,
  },
  {
    title: "Cell Phones",
    icon: icon.cellPhone,
    children: <CellPhones />,
  },
];

function renderMenu(electronics) {
  return (
    <>
      {electronics.map((electronics, i) => (
        <div
          key={i}
          className={cx({
            childrenElectronics: electronics.children || electronics.subMenu,
          })}
        >
          <div className={cx("title")}>
            <img src={electronics.icon} alt="" />
            {electronics.title}
          </div>
          <div className={cx("list")}>
            {electronics.children || electronics.subMenu}
          </div>
        </div>
      ))}
    </>
  );
}

function Electronics() {
  return renderMenu(LIST_ElECTRONICS);
}

export default Electronics;
