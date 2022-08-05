import React from "react";
import css from './Users.module.css'
import userPhoto from '../../assets/images/user-png-image.png'
import { NavLink } from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let onPageChange = (page) => {
        props.setCurrentPage(page)
    }

    return (
        <div>
            <div className={css.pagination}>
                { pages.map( p => <span key={ p } className={ props.currentPage === p ? css.selectedPage : undefined } onClick={ () => { onPageChange(p) } }> { p } </span> ) }
            </div>
            { 
                props.users.map( u => 
                    <div key={u.id} className={css.userBlock}>
                        <span>
                            <div className={css.name}>{u.name}</div>
                            <div className={css.users}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt='avatar' src={ u.photos.small != null ? u.photos.small : userPhoto } className={css.userPhoto} />
                                </NavLink>
                            </div>
                            <span>
                                <div>{u.status}</div>
                            </span>
                            <div className={css.subscribe}>
                                { u.followed
                                    ? <button disabled={props.currentFollowedUser.includes(u.id)} onClick={ () => {
                                        props.unfollowThunk(u.id)
                                    } }>Unfollow</button>

                                    : <button disabled={props.currentFollowedUser.includes(u.id)} onClick={ () => {
                                        props.followThunk(u.id)
                                    } }>Follow</button>
                                }
                            </div>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users