import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function Menu({ deleteItem, id, title, image, likes, dislikes, category }) {
    const handleDelete = () => {
        deleteItem(id)
    }
    return (
        <div className="item">
            <div className="item-con">
                <div className="item-container">
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{category}</p>
                    <div >
                        <Badge badgeContent={likes} color="primary">
                            <ThumbUpIcon />
                        </Badge>
                    </div>
                    <div >
                        <Badge badgeContent={dislikes} color="primary">
                            <ThumbDownAltIcon />
                        </Badge>
                    </div>
                </div>
                <div onClick={handleDelete}>
                    <IconButton aria-label="share">
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Menu;
