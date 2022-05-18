import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../redux/actions/authenticateAction'
import { useDispatch } from 'react-redux'

const NavBar = ({authenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const goToLogin = () => {
    navigate('/login')
  }
  const goToMain = () => {
    navigate('/')
  }

  const logOut = () => {
    dispatch(authenticateAction.logout(authenticate))
  }

  const search = (e) => {
    if(e.key === "Enter") {
      console.log("we click this key: ", e.key);
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      console.log("keyword:", keyword)
      // url을 바꿔준다.
      navigate(`/?q=${keyword}`);
      // url이 바뀐다.
    }
  }

  return (
    <div>
        {authenticate === false ?
          <div className='login-button' onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그인</div>
          </div>
          : 
          <div className='login-button' onClick={logOut}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그아웃</div>
      </div>
        }
      <div className='nav-section' onClick={goToMain}>
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png"
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search-bar'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type="text" onKeyPress={(e) => search(e)}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar