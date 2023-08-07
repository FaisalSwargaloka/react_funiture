import React from 'react';
import "./dashboard.css"
import { useState, useEffect } from "react"
import ImageDefault from "../../asset/bg/defaultImage.jpg"
import firebase from "../../fireBase/FireBase"
import DOMPurify from 'dompurify';

const Dashboard = () => {

    const [isEditing, setIsEditing] = useState(false)

    const [sucsessMessage, setSuccsess] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [failedImage, setFailedImage] = useState('');

    const [showFailed, setShowFailed] = useState(false);


    const [user, setUser] = useState({
        displayName: '',
        email: '',
        photoURL: '',
    })


    const [editedUser, setEditedUser] = useState(user);

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            const parsedUser = JSON.parse(userData)
            setUser(parsedUser);
            setEditedUser(parsedUser);
        }
    }, [])


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        const sanitazedValue = DOMPurify.sanitize(value);
        setEditedUser((prevUser) => ({
            ...prevUser,
            [id]: sanitazedValue,
        }));
    }

    const handleEditProfile = () => {
        setEditedUser({ ...user });
        setIsEditing(true);
    }

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = ImageDefault;
    }

    useEffect(() => {
        const ImgElement = document.querySelector('.profile-user');
        ImgElement.onerror = handleImageError;
        return () => {
            ImgElement.onerror = null;
        }
    }, [])


    const handleCancelClick = () => {
        setEditedUser({ ...user });
        setIsEditing(false)
    }

    const handleSaveClick = () => {
        const MAX_PHOTO_URL_LENGTH = 120;
        const photoURL = editedUser.photoURL.substring(0, MAX_PHOTO_URL_LENGTH);
        firebase.auth().currentUser.updateProfile({
            displayName: editedUser.displayName,
            email: editedUser.email,
            photoURL: photoURL,
        }).then(() => {
            setUser({ ...editedUser })
            setSuccsess('Profile Berhasil Di ubah')
            setShowSuccessMessage(true);
            localStorage.setItem('user', JSON.stringify(editedUser));
            setIsEditing(false);
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 3000)
        }).catch(() => {
        })
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedExtensions = ["jpg", "jpeg", "png"];
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                setFailedImage('gagal upload extension harus berupa .jpg .jpeg. png, Silahkan Coba lagi')
                setShowFailed(true)
                setTimeout(() => {
                    setShowFailed(false)
                }, 5000)
                e.target.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                const dataURL = reader.result;
                setEditedUser((prevUser) => ({
                    ...prevUser,
                    photoURL: dataURL,
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    const handleNameChange = (e) => {
        const { value } = e.target;
        setEditedUser((prevUser) => ({
            ...prevUser,
            displayName: value,
        }));
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        const numericValue = value.replace(/\D/g, '');
        setEditedUser((prevUser) => ({
            ...prevUser,
            phoneNumber: numericValue,
        }));
    };


    useEffect(() => {
        setEditedUser({ ...user });
    }, [user]);

    return (
        <div className="bg-dashboard">
            <div className="container-dashboard">
                <div className="image-user">
                    <img className="profile-user"
                        src={editedUser.photoURL || ImageDefault}
                        alt=""
                    />
                    {
                        isEditing ? (
                            <>
                                <input
                                    className='input-edit-image'
                                    type='file'
                                    id='photoURL'
                                    accept='image/*'
                                    onChange={handleFileInputChange}
                                />
                            </>
                        ) : (
                            <button className="btn-edit-profile" onClick={handleEditProfile}>Ubah Profile</button>
                        )
                    }
                    <div className="text-change-image">
                        <h5>Ukuran gambar: maks. 1 MB</h5>
                        <p>Format gambar: .JPEG, .PNG .JPG</p>
                        {
                            showFailed && <p
                                style={{
                                    color: "red",
                                    margin: "2px 0"
                                }}
                            >
                                {failedImage}</p>
                        }
                    </div>
                </div>
                <form className="form-user">
                    <div className="text-info-profile">
                        <h1>Info Profile</h1>
                    </div>
                    <div className="info-profile">
                        <label className="label-dashboard" htmlFor="name">Nama</label>
                        <input className="input-dashboard" type="text" id="name" value={editedUser.displayName || ""} onChange={handleNameChange} readOnly={!isEditing} />
                    </div>
                    <div className="info-profile">
                        <label className="label-dashboard" htmlFor="username">Username</label>
                        <input className="input-dashboard" type="text" id="username" value={editedUser.username || " "} onChange={handleInputChange} readOnly={!isEditing} />
                    </div>
                    <div className="info-profile">
                        <label className="label-dashboard" htmlFor="bioText">Bio</label>
                        <input className="input-dashboard" type="text" id="bioText" value={editedUser.bioText || " "} onChange={handleInputChange} readOnly={!isEditing} />
                    </div>
                    <div className="text-info-pribadi">
                        <h1>Info Pribadi</h1>
                    </div>
                    <div className="info-pribadi">
                        <label className="label-dashboard" htmlFor="userId">User Id</label>
                        <input className="input-dashboard" type="text" id="userId" value={editedUser.userId || " "} onChange={handleInputChange} readOnly={!isEditing} />
                    </div>
                    <div className="info-pribadi">
                        <label className="label-dashboard" htmlFor="email">E-mail</label>
                        <input className="input-dashboard" type="email" id="email" value={editedUser.email || " "} onChange={handleInputChange} readOnly={true} />
                    </div>
                    <div className="info-pribadi">
                        <label className="label-dashboard" htmlFor="noHp">Nomor Hp</label>
                        <input className="input-dashboard" value={editedUser.phoneNumber || ""} onChange={handlePhoneChange} type="tel" id="noHp" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" readOnly={!isEditing} />
                    </div>
                    {
                        showSuccessMessage && <p style={{
                            color: "green",
                            margin: "10px 0"
                        }}
                        >
                            {sucsessMessage}</p>
                    }
                    {isEditing && (
                        <>
                            <button className="btn-Simpan-biodata" type='button' onClick={handleSaveClick}>
                                Simpan Biodata
                            </button>
                            <button className="btn-change-profile" type='button' onClick={handleCancelClick}>
                                Batal
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>

    );
}

export default Dashboard;