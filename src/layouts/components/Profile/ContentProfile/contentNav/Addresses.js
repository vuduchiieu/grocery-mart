import classNames from "classnames/bind";
import styles from "./contentNav.module.scss";
import icon from "~/assets/icon";
import { useForm } from "react-hook-form";
import { useAppContext } from "~/components/Context/AppContext";
import { userData } from "~/components/userData/userData";

const cx = classNames.bind(styles);

function Addresses({ addresses, setAddresses }) {
  const { setDetailed, detailed, setTown, town, setState, state, setDC, dc } =
    useAppContext();
  const handleBack = () => {
    setAddresses(!addresses);
  };

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    const userData = {
      detailed: data.detailed,
      town: data.town,
      state: data.state,
      dc: data.dc,
    };
    setDetailed(userData.detailed);
    setTown(userData.town);
    setState(userData.state);
    setDC(userData.dc);
    let userProfile = [];
    userProfile.push(userData);
    localStorage.setItem("addresses", JSON.stringify(userProfile));
    handleBack();
  };
  const handleInputChange = (e) => {
    if (e.target.value.length > 5) {
      setValue("dc", e.target.value.substring(0, 5));
    }
  };
  return (
    <div className={cx("content-nav")}>
      <div className={cx("title")}>
        <img onClick={handleBack} src={icon.back} alt="" />
        <h3>Addresses</h3>
      </div>
      <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("wrap")}>
          <div className={cx("first-input")}>
            <h4>Detailed address</h4>
            <input
              defaultValue={detailed || userData.detailed}
              type="text"
              placeholder="Detailed address"
              {...register("detailed")}
            />
          </div>
          <div className={cx("second-input")}>
            <h4>Town</h4>
            <input
              defaultValue={town || userData.town}
              type="text"
              placeholder="Town"
              {...register("town")}
            />
          </div>
          <div className={cx("third-input")}>
            <h4>State/ Province/ City</h4>
            <input
              defaultValue={state || userData.state}
              type="text"
              placeholder="State/ Province/ City"
              {...register("state")}
            />
          </div>
          <div className={cx("third-input")}>
            <h4>Postcode</h4>
            <input
              defaultValue={dc || userData.dc}
              type="number"
              placeholder="DC..."
              {...register("dc")}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className={cx("save")}>
            Save Edit
          </button>
        </div>
      </form>
      <button onClick={handleBack} className={cx("cancel")}>
        Cancel
      </button>
    </div>
  );
}

export default Addresses;
