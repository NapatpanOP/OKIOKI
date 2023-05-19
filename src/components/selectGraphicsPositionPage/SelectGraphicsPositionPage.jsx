import { useLocation, useNavigate, useParams } from "react-router";
import { BrandAPI } from "../../apis/brandAPI";
import './SelectGraphicsPositionPage.css';
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { UserAPI } from "../../apis/userAPI";
import { useAuthContext } from "../../core/contexts/AuthProvider";

// useReducer

const SelectGraphicsPositionPage = () => {
    const { token } = useAuthContext();
    // const { id, position } = useParams();
    const navigate = useNavigate();
    const location = useLocation()

    const [brand, setBrand] = useState(null)
    const [show, setShow] = useState(false);
    // const [formParam, setFormParam] = useState(null);
    const [idState, setId] = useState('');
    const [position, setPosition] = useState(5)
    const [selectedGraphicIndex, setSelectedGraphicIndex] = useState();

    useEffect(() => {
        const setup = () => {
            console.log(location.state)
            if (location.state) {
                setId(location.state.id)
                setPosition(location.state.position)
                console.log(location.state.id)
                BrandAPI.getById(location.state.id).then((res) => {
                    console.log(res)
                    setBrand(res)
                })
            } else {
                navigate('/')
            }
        }

        setup()
    }, [])

    const handleClose = () => setShow(false);

    const onClickGraphicHandle = (index) => {
        setSelectedGraphicIndex(index)
        console.log(idState)
        setShow(true)
    };

    const confirmHandle = () => {
        var requestData = brand
        requestData.adsPositions[location.state.position].selected_counts += 1
        requestData.adsPositions[location.state.position].images_urls[selectedGraphicIndex].selected_counts += 1
        setShow(false)
        BrandAPI.updateBrandById(requestData).then((res) => {
            var requestUser = token
            UserAPI.getById(token._id).then((user) => {
                if (user?.ads_poitions_selected) {
                    user.ads_poitions_selected.push({
                        brand_id: res._id,
                        brand_title: res.title,
                        ad_position: position,
                        ad_graphic: selectedGraphicIndex
                    })
                } else {
                    user["ads_poitions_selected"] = [{
                        brand_id: res._id,
                        brand_title: res.title,
                        ad_position: position,
                        ad_graphic: selectedGraphicIndex
                    }]
                }
                UserAPI.updateUserById(user).then(() => {
                    navigate('/')
                })
            })

        })
    }

    // const refreshData = (id) => {
    //     console.log(id)
    //     BrandAPI.getById(id).then((res) => {
    //         console.log(res)
    //         setBrand(res)
    //     })
    // }



    const renderButtonList = () => {
        if (brand) {
            return brand.adsPositions[location.state.position].images_urls.map((img, index) => {
                return <button onClick={() => onClickGraphicHandle(index)} type="button" key={index} className="btn btn-outline-dark">POSITION {index + 1} {img.selected_counts}</button>
            })
        } else {
            return
        }
    }


    return (
        <div className="position-container">
            <img className="image-banner" src={brand?.image} alt={brand?.title} />
            <div className="button-list-contain">
                {renderButtonList()}
            </div>
            <div className="position-img-list">
                <img src="./src/assets/brand07.jpg" alt="" />
                <img src="./src/assets/brand07.jpg" alt="" />
                <img src="./src/assets/brand07.jpg" alt="" />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Position selection</Modal.Title>
                </Modal.Header>
                <Modal.Body>If sure to select this position, press Save and press Next.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmHandle()}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SelectGraphicsPositionPage;

// {
//     "title": "Card 5",
//     "image": "brand05.jpg",
//     "full_image": "",
//     "like": [],
//     "type": "New",
//     "link": "/dailynewspage",
//     "adsPositions": [
//         {
//           "selected_counts": 0,
//           "images_urls": [
//               {
//                   "selected_counts": 0,
//                   "images_url": ""
//               },
//               {
//                   "selected_counts": 0,
//                   "images_url": ""
//               }
//           ]
//       }
//     ]
//   }