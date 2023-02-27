import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductApi from "../../api/productApi/ProductApi";
//@ts-ignore
import Dropdown from "react-dropdown-animated";
import "./styles/styles.css";
//TODO FIX Bug while sidebar longer then content
const SideBar = () => {
  const [sideBarElements, setSideBarEl] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const getSideBarElements = async () => {
    const res = await ProductApi.getAllCategories();
    setSideBarEl(res);
    try {
    } catch (e) {
      console.log("sideBarErr", e);
    }
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getSideBarElements();
  }, []);

  const handleSelect = (category: string) => {
    navigate("/categoryList", { state: category });
  };

  return (
    <>
      <Dropdown
        value="Menu"
        buttonBackgroundColor="deeppink"
        buttonOutlineColor="white"
        options={sideBarElements.map((el) => ({
          content: el,
          onClick: (event: any) => handleSelect(el),
        }))}
        onClick={handleClick}
      ></Dropdown>
    </>
  );
};

export default SideBar;
