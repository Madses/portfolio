import React from "react";
import * as S from "./Menu.styled";
import { menuItems } from "../../menuItems";

export default function Menu() {
    return (
        <S.MenuContainer>
            <S.Menu>
                {menuItems.map((item, index) => (
                    <S.MenuItem
                        activeClass="active"
                        to={item.sectionId}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        key={index}
                    >
                        {item.title}
                    </S.MenuItem>
                ))}
            </S.Menu>
        </S.MenuContainer>
    );
}
