import Header from "~/layouts/components/Home/Header/Header";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";
import PersonalInfo from "./ContentProfile/contentNav/PersonalInfo";
import ContentProfile from "./ContentProfile/ContentProfile";
import Addresses from "./ContentProfile/contentNav/Addresses";
import { useAppContext } from "~/components/Context/AppContext";
import List from "./ContentProfile/contentNav/List";

function Profile() {
    const { personal, setPersonal, addresses, setAddresses, lists, setLists } =
        useAppContext();
    const handleInfo = () => {
        setPersonal(!personal);
        setAddresses(false);
        setLists(false);
    };
    const handleAddresses = () => {
        setAddresses(!addresses);
        setPersonal(false);
        setLists(false);
    };
    const handleLists = () => {
        setLists(!lists);
        setPersonal(false);
        setAddresses(false);
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
                    handleLists={handleLists}
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
                ) : lists === true ? (
                    <List lists={lists} setLists={setLists} />
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
