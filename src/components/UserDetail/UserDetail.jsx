import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../store/actions/actions'

const UserDetail = React.memo(({match}) => {
  const [isLoading, setIsLoading] = useState(true)
  const { name } = match.params
  const dispatch = useDispatch()
  const curUser = useSelector(state => state.users.curUser)

  const getUser = async () => {
    setIsLoading(true)
    try {
      await dispatch(actions.fetchUser(name))
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {curUser.id ? (
            <>
              <h1>UserDetail</h1>
              <img src={curUser.avatar_url} alt=""/>
              <p>Login: {curUser.login}</p>
              <p>Twitter Username: {curUser.twitter_username}</p>
              <p>Login: {curUser.login}</p>
              <p>Login: {curUser.login}</p>
            </>
          ) : (
            <h1>User Not found</h1>
          )}
        </>
      )}
    </div>
  )
})

export default withRouter(UserDetail)