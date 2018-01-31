import React, {PropTypes} from 'react'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import UserList from '../components/table/branch/list'
import UserSearch from '../components/table/branch/search'
import UserModal from '../components/table/branch/modal'
import {Row, Col} from 'antd';

function Branch({location, dispatch, branch}) {

  const {
    loading,
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = branch
  const {field, keyword} = location.query

  const userModalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `branch/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'branch/hideModal'})

    }
  }

  const userListProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    onPageChange(page) {
      const {query, pathname} = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize
        }
      }))
    },
    onDeleteItem(id) {
      dispatch({type: 'users/delete', payload: id})
    },
    onEditItem(item) {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    }
  }

  const userSearchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      fieldsValue.keyword.length
        ? dispatch(routerRedux.push({
          pathname: '/table/users',
          query: {
            field: fieldsValue.field,
            keyword: fieldsValue.keyword
          }
        }))
        : dispatch(routerRedux.push({pathname: '/table/users'}))
    },
    onAdd() {

      dispatch({
        type: 'branch/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  const UserModalGen = () => <UserModal {...userModalProps}/>
 // console.log(userListProps,'dddd')

  return (
    <div className='content-inner'>
      <Row>
        <Col xs={24} md={24} lg={24}>
          <UserSearch {...userSearchProps}/>
          <UserList  />
          <UserModalGen/>
        </Col>

      </Row>

    </div>
  )
}

Branch.propTypes = {
  branch: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({branch}) {
  return {branch}
}

export default connect(mapStateToProps)(Branch)