import React, { useEffect, useState } from 'react';
import './Home.css'

// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));

const Home = () => {
    const [items,setItems]=useState([]) //json data 
    const [spanner,setSpanner]=useState(null) //spanner loading
    const [visibale,setVisibales]=useState(4) //load more data

    // const classes=useStyles()
    // <Backdrop className={classes.backdrop} open>
    //     <CircularProgress color="inherit" />
    // </Backdrop>

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
            setSpanner(data)
        })
    },[])
    const handleClick=()=>{
        setVisibales((preValue)=>preValue + 4);
    }
    return (
        <div className="container">
            <div className="row">
                { spanner ?
                    items.slice(0,visibale).map((items)=>(
                        <div className="col- col-sm-6 col-md-3 col-lg-3 col-xl-3 llll">
                            <div className="single_service">
                                <div className="span">
                                    <span>{items.id}</span>
                                </div>
                                <p>{items.body.slice(0,80)}</p>
                            </div>
                        </div>
                    )):<div class="d-flex justify-content-center lll">
                        <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                } 
                <button
                    onClick={()=>handleClick()}
                >Load more</button>
            </div>
        </div>
    );
};

export default Home;