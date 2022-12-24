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

                <SLink  to={'/cuisine/Italian'} >
                    <FaPizzaSlice/>
                    <h4>Italian</h4>
                </SLink>
                <SLink   to={'/cuisine/American'}>
                    <FaHamburger/>
                    <h4>American</h4>
                </SLink>
                <SLink  to={'/cuisine/Thai'}>
                    <GiNoodles/>
                    <h4>Thai</h4>
                </SLink>
                <SLink  to={'/cuisine/Japanese'}>
                    <GiChopsticks/>
                    <h4>Japanese</h4>
                </SLink>
            </List>
        </>
    )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  
  svg{
    color: white;
    font-size: 1.5rem;
  }
  
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
    h4{
      color: white;
    }
    svg{
      color: white;
    }
  }
`


export default Category