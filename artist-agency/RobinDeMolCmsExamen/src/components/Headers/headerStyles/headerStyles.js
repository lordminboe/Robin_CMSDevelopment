import styled from "styled-components"

export const MenuList = styled.ul
`
display: flex;
font-size: 30px;
align-items: center;
list-style-type: none;

@media only screen and (max-width: 600px) {
font-size: 25px;

}
`

export const MenuItemsUL = styled.li
`
margin-right: 50px;
color: white;
margin-top: 20px;

`

export const HeaderNav = styled.header 
`
display: flex;
background-color: gray;
height: 80px;
justify-content: flex-end;
@media only screen and (max-width: 600px) {

justify-content: center;
}
`

    