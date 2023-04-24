import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useRef, useState } from 'react'
import { db, storage } from '../../firebase/config'
import placeHolder from '../../assets/imgPlaceholder.jpg'
import './addProducts.css'
import { ImSpinner8 } from 'react-icons/im'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import Product from '../../components/shop/products/Product'
// import image from '../../assets/about1.jpg'

const AddProducts = () => {
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState('disposables')
    const nameRef = useRef()
    const puffRef = useRef()
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
            setImgError('Please add product picture first.')
            setUploading(false)
            return
        }
        try {
            await setDoc(doc(db, category, nameRef.current.value), {
                category,
                name: nameRef.current.value,
                description: descRef.current.value,
                image: image,
                puffs: puffRef.current.value ? puffRef.current.value : 'N/A',
            });
            setUploading(false)
            setImgError(false)
            setUploaded(true)
            setTimeout(() => {
                setUploaded(false)
            }, 1000);
            document.getElementById('add-product-form').reset()
            setImage(null)
            setFile(null)
        }
        catch (err) {
            console.log(err)
            setImgError('Something went wrong, Try again.')
        }


    }

    return (
        <div className='add-products'>
            <div>
                {
                    uploaded ? <p className='add-products-box box-succ'> <RiCheckboxBlankCircleFill className='add-product-box-circle__succ' /> Product added successfuly.</p> :
                        imgError ? <p className='add-products-box box-err'> <RiCheckboxBlankCircleFill className='add-product-box-circle__err' /> {imgError}</p> :
                            ""
                }
            </div>
            <form id='add-product-form' onSubmit={addProduct}>
                <div className='add-product-picture'>
                    <input onChange={(e) => handleFileChange(e)} className='add-products-file-input' type='file' />
                    <img className='add-prduct-img' src={image ?? placeHolder} alt="" />
                </div>
                <div className='add-product-cateogry-btns'>
                    <button onClick={() => setCategory('disposables')} className={category === 'disposables' ? 'add-product-category-btn__active' : 'add-product-category-btn'}>Disposables</button>
                    <button onClick={() => setCategory('e-liquid')} className={category === 'e-liquid' ? 'add-product-category-btn__active' : 'add-product-category-btn'}>E-liquid</button>
                    <button onClick={() => setCategory('accessories')} className={category === 'accessories' ? 'add-product-category-btn__active' : 'add-product-category-btn'}>Accessories</button>
                </div>
                <input required ref={nameRef} type='text' placeholder='name' />
                <input required ref={descRef} type='text' placeholder='description' />
                <input ref={puffRef} type='text' placeholder='puffs' />

                {
                    uploading ?
                        <button disabled={true} className='add-product-submit-btn__loading'><ImSpinner8 className='add-product-box-circle__loading' /> loading...</button>
                        :
                        <button className='add-product-submit-btn' type='submit'>Add product</button>
                }
            </form>
        </div>
    )
}

export default AddProducts