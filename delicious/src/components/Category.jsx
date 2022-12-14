import { FaPizzaSlice, FaHamburger} from "react-icons/fa";
// Go to react icons and search for icons there
import { GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
// Normally use Link
// NavLink gives class Active then you can add specific styling

function Category(){
    return (
        <>
            <List>  {/* In React you don't want to use anchor tags like here
                 If you use an <a> it refreshes page and navigates somewhere else
                 Instead import NavLink from react router dom and use that

                 Need to set up routing before NavLink works properly
                 */}

                <NavLink  to={'/cuisine/Italian'} >
                    <FaPizzaSlice/>
                    <h4>Italian</h4>
                </NavLink>
                <NavLink   to={'/cuisine/American'}>
                    <FaHamburger/>
                    <h4>American</h4>
                </NavLink>
                <NavLink  to={'/cuisine/Thai'}>
                    <GiNoodles/>
                    <h4>Thai</h4>
                </NavLink>
                <NavLink  to={'/cuisine/Japanese'}>
                    <GiChopsticks/>
                    <h4>Japanese</h4>
                </NavLink>
            </List>
        </>
    )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export default Category