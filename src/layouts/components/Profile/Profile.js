import Header from "~/layouts/components/Home/Header/Header";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";
import PersonalInfo from "./ContentProfile/contentNav/PersonalInfo";
import ContentProfile from "./ContentProfile/ContentProfile";
import Addresses from "./ContentProfile/contentNav/Addresses";
import { useAppContext } from "~/components/Context/AppContext";

function Profile() {
    const { personal, setPersonal, addresses, setAddresses } = useAppContext();
    const handleInfo = () => {
        setPersonal(!personal);
        setAddresses(false);
    };
    const handleAddresses = () => {
        setAddresses(!addresses);
        setPersonal(false);
    };
    return (
        <div
            style={{
                backgroundColor: "#F6F6F6",
            }}
        >
            <Header />
            <div
                style={{
                    display: "flex",
                    margin: "30px auto 0",
                    height: 942,
                    width: 1340,
                }}
            >
                <NavBar
                    handleInfo={handleInfo}
                    handleAddresses={handleAddresses}
                />
                {personal === true ? (
                    <PersonalInfo
                        personal={personal}
                        setPersonal={setPersonal}
                    />
                ) : addresses === true ? (
                    <Addresses
                        addresses={addresses}
                        setAddresses={setAddresses}
                    />
                ) : (
                    <ContentProfile
                        addresses={addresses}
                        setAddresses={setAddresses}
                        personal={personal}
                        setPersonal={setPersonal}
                    />
                )}
            </div>
        </div>
    );
}

export default Profile;
