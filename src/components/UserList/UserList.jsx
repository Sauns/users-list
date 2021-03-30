import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import { Pagination, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions/actions'

const UserList = React.memo(({ history }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const usersList = useSelector(state => state.users.usersList)
  const totalPages = 46

  const getUsers = async (page) => {
    setIsLoading(true)
    const options = {
      per_page: 5,
      since: page * 5 - 5,
    }
    try {
      await dispatch(actions.fetchUsers(options))
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getUsers(1)
  }, [])

  const columns = [
    {
      title: (
        <span>Login</span>
      ),
      dataIndex: 'login',
      width: 200,
    },
    {
      title: (
        <span>Profile Link</span>
      ),
      dataIndex: 'html_url',
      width: 200,
    },
    {
      title: (
        <span>Avatar</span>
      ),
      dataIndex: 'avatar_url',
      width: 200,
    },
  ]

  const usersListData = usersList
    ? usersList.map(user => ({
        key: user.id,
        id: user.id,
        name: user.login,
        login: (
          <div>{user.login}</div>
        ),
        html_url: (
          <>
            <div><a href={user.html_url}>Link of user</a></div>
          </>
        ),
        avatar_url: (
          <>
            <div className='user-list__image'><img className='img-fluid' src={user.avatar_url} alt=""/></div>
          </>
        )
      }))
  : []

  const handleEdit = (user) => {
    const { name } = user
    history.push(`/user/${name}`)
  }

  return (
    <>
      <div className='container'>
        <h2>UserList</h2>
        {isLoading ? (
          <p>Loading</p>
        ) : (
            <Table
              columns={columns}
              dataSource={usersListData}
              pagination={false}
              onRow={user => ({
                onClick: () => handleEdit(user),
              })}
            />
        )}
        <div className='paggination'>
          <Pagination
            onChange={page => getUsers(page)}
            total={totalPages}
            pageSize={5}
          />
        </div>
      </div>
    </>
  )
})

export default withRouter(UserList)