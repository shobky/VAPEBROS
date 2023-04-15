import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useRef, useState } from 'react'
import { db, storage } from '../../firebase/config'
import placeHolder from '../../assets/imgPlaceholder.jpg'
import './addBlogs.css'
import { ImSpinner8 } from 'react-icons/im'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
// import image from '../../assets/about1.jpg'

const AddBlogs = () => {
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const titleRef = useRef()
    const articleRef = useRef()
    const descRef = useRef()
    const [imgError, setImgError] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [uploaded, setUploaded] = useState(false)

    const handleFileChange = async (e) => {
        let file = (e.target.files[0])
        setFile(file)
        setImage(URL.createObjectURL(file))

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;

                // compressing the image 
                image.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = 500;
                    canvas.height = 500;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 0, 0, 500, 500);

                    // converting the image to base-64 encoded file 
                    const compressedImage = canvas.toDataURL('image/png', 0.2);
                    setImage(compressedImage)
                    console.log(image)
                };
            };
        } else {
            setImgError('No photo was added, Try again.')
            setTimeout(() => {
                setImgError(false)
            }, 1000);
        }
    }

    const addProduct = async (e) => {
        e.preventDefault()
        setUploading(true)
        if (image === null) {
            setImgError('Please add blog picture first.')
            setUploading(false)
            return
        }
        try {
            const docRef = await addDoc(collection(db, 'blogs'), {
                title: titleRef.current.value,
                description: descRef.current.value,
                image: image,
                article: articleRef.current.value,
            })
            console.log(docRef.id)
            setUploading(false)
            setImgError(false)
            setUploaded(true)
            setTimeout(() => {
                setUploaded(false)
            }, 1000);
            document.getElementById('add-blog-form').reset()
            setImage(null)
            setFile(null)
        }
        catch (err) {
            console.log(err)
            setImgError('Something went wrong, Try again.')
        }


    }

    return (
        <div className='add-blogs'>
            <div>
                {
                    uploaded ? <p className='add-blogs-box box-succ'> <RiCheckboxBlankCircleFill className='add-blog-box-circle__succ' /> Blog added successfuly.</p> :
                        imgError ? <p className='add-blogs-box box-err'> <RiCheckboxBlankCircleFill className='add-blog-box-circle__err' /> {imgError}</p> :
                            ""
                }
            </div>
            <form id='add-blog-form' onSubmit={addProduct}>
                <div className='add-blog-picture'>
                    <input onChange={(e) => handleFileChange(e)} className='add-blogs-file-input' type='file' />
                    <img className='add-blogs-img' src={image ?? placeHolder} alt="" />
                </div>
                <input required ref={titleRef} type='text' placeholder='title' />
                <input required ref={descRef} type='text' placeholder='description' />
                <textarea className='add-blogs-text-area' ref={articleRef} type='text' placeholder='article' />

                {
                    uploading ?
                        <button disabled={true} className='add-blog-submit-btn__loading'><ImSpinner8 className='add-blog-box-circle__loading' /> loading...</button>
                        :
                        <button className='add-blog-submit-btn' type='submit'>Add Blog</button>
                }
            </form>
        </div>
    )
}

export default AddBlogs